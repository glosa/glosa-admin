<template>
  <div class="comments">
    <article v-for="comment in comments" :key="comment.id" class="comment">
        <h2 class="comment__title">Ut tristique et.</h2>
        <p class="comment__author">pepe</p>
        <p class="comment__text">Nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque, volutpat ac tincidunt. Suspendisse sed nisi lacus, sed viverra tellus in.</p>
        <div class="btn-group btn-group-block comment__controls">
            <button class="btn btn-lg">Delete</button>
            <button class="btn btn-primary btn-lg">Reply</button>
            <a class="btn btn-primary btn-lg" target="_blank" href="#">View</a>
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
            comments: [1, 2],
            pag: 1
        }
    },
    mounted: function () {
        axios.defaults.baseURL = this.$store.state.url
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`
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
        }
    },
    watch: {
        pag: function () {
            this.getComments()
        }
    }

}
</script>

