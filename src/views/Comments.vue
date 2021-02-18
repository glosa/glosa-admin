<template>
  <div class="comments">
    <article v-for="comment in comments" :key="comment.id" class="comment">
        <h2 class="comment__title">{{ filterTitleWithoutURL(comment.thread) }}</h2>
        <p class="comment__author">{{ comment.author }}</p>
        <p class="comment__text">{{ comment.message }}</p>
        <div class="btn-group btn-group-block comment__controls">
            <button class="btn btn-lg">Delete</button>
            <button class="btn btn-primary btn-lg">Reply</button>
            <a class="btn btn-primary btn-lg" target="_blank" :href="comment.thread">View</a>
        </div>
        <div class="divider"></div>
    </article>
  </div>
</template>

<script>

import axios from "axios"

export default {
    name: 'Comments',
    data: function () {
        return {
            comments: [],
            pag: 1
        }
    },
    mounted: function () {
        axios.defaults.baseURL = this.$store.state.url
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`
        this.getComments()
    },
    methods: {
        getComments: function () {
          // Show Loading
          this.$store.commit('loadingEnable')
          // config Axios
          axios
              .post(`${this.$store.state.url}${this.$store.state.preURLAPI}comments/latest/${this.pag}`)
                .then((response) => {
                    this.comments = response.data
                })
                .catch((error) => {
                    this.$store.dispatch('toastAdd', {
                        message: 'Not load comments.',
                        status: 'error'
                    })
                    console.log(error)
                })
                .then(() => {
                    // Disable Loading
                    this.$store.commit('loadingDisable')
                });
        },
        filterTitleWithoutURL: function (title) {
            return title.replace(/http?s:\/\/\w+\.\w+/gi, '')
        }
    },
    watch: {
        pag: function () {
            this.getComments()
        }
    }

}
</script>

