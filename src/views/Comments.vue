<template>
  <div class="comments">
    <article v-for="comment in comments" :key="comment.id" class="comment">
        <h2 class="comment__title">{{ filterTitleWithoutURL(comment.thread) }}</h2>
        <p class="comment__author">{{ comment.author }}</p>
        <p v-if="commentUpdate !== comment.id" class="comment__text">{{ comment.message }}</p>
        <textarea v-if="commentUpdate === comment.id" v-model="textUpdate" class="comment__update"></textarea>
        <div class="btn-group btn-group-block comment__controls">
            <span v-if="commentUpdate === comment.id">
                <!-- Confirm Update -->
                <button class="btn btn-lg btn-primary" @click="UpdateComment(comment.id)">Save</button>
                <button class="btn btn-lg" @click="commentUpdate = false">Cancel</button>
            </span>
            <span v-else-if="commentDelete === comment.id">
                <!-- Confirm delete -->
                <button class="btn btn-lg btn-error">Are you sure?</button>
                <button class="btn btn-lg" @click="deleteComment(comment.id)">Yes</button>
                <button class="btn btn-primary btn-lg" @click="commentDelete = false">No</button>
            </span>
            <span v-else>
                <!-- Actions -->
                <button class="btn btn-lg" @click="commentDelete = comment.id">Delete</button>
                <button class="btn btn-primary btn-lg" @click="openEditorUpdate(comment.id)">Edit</button>
                <a class="btn btn-primary btn-lg" target="_blank" :href="comment.thread">View</a>
            </span>
        </div>
        <div class="divider"></div>
    </article>
    <!-- Loading -->
    <div v-if="comments" ref="loading" class="loading loading-lg"></div>
  </div>
</template>

<script>

import axios from "axios"

export default {
    name: 'Comments',
    data: function () {
        return {
            comments: [],
            commentUpdate: false,
            textUpdate: '',
            pag: 1,
            commentDelete: false
        }
    },
    mounted: function () {
        // Auth
        axios.defaults.baseURL = this.$store.state.url
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`
        // Get comments
        this.getComments()
        // Check next page
        this.createObserverNextPage();

    },
    methods: {
        getComments: function () {
          // Show Loading
          this.$store.commit('loadingEnable')
          // config Axios
          axios
              .post(`${this.$store.state.url}${this.$store.state.preURLAPI}comments/latest/${this.pag}`)
                .then((response) => {
                    this.comments = this.comments.concat(response.data)
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
        nextPage: function () {
            this.pag = this.pag + 1
        },
        getMessageCommentById: function (id) {
            const commentFilter = this.comments.filter((comment) => comment.id === id)[0];
            return commentFilter !== undefined ? commentFilter.message : ''
        },
        createObserverNextPage: function () {
            const onIntersectionVisible = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.nextPage()
                    }
                });
            };
            const observerVisible = new IntersectionObserver(onIntersectionVisible);
            observerVisible.observe(this.$refs.loading);
        },
        deleteComment: function (id) {
            this.$store.commit('loadingEnable')
            axios
                .delete(`${this.$store.state.url}${this.$store.state.preURLAPI}comments/${id}`)
                .then(() => {
                    this.$store.dispatch('toastAdd', {
                        message: 'Delete!',
                        status: 'success'
                    })
                })
                .catch((error) => {
                    this.$store.dispatch('toastAdd', {
                        message: 'Could not be eliminated!',
                        status: 'error'
                    })
                    console.log(error)
                })
                .then(() => {
                    // Disable Loading
                    this.$store.commit('loadingDisable')
                    this.commentDelete = false;
                    // Remove comment in UI
                    this.comments = this.comments.filter((comment) => comment.id !== id)
                });
        },
        openEditorUpdate: function (id) {
            this.commentUpdate = id
            this.textUpdate = this.getMessageCommentById(id)
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

