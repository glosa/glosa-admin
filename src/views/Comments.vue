<template>
  <div class="comments">
    <h1>This is comments</h1>
  </div>
</template>

<script>

export default {
    name: 'Comments',
    components: {
    },
    methods: {
        getComments: function () {
          // Show Loading
          this.$store.commit('loadingEnable')
          // config Axios
          axios.defaults.baseURL = this.url
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`
          axios
              .post(`${this.$store.state.url}${this.$store.state.preURLAPI}token/check/`)
                .then((response) => {
                    // Save id and go to next Page
                    if (response.data.valid) {
                        // Save
                        this.$store.commit('logIn', {
                            url: this.url,
                            token: this.token
                        })
                        // Info user
                        this.$store.dispatch('toastAdd', {
                            message: 'Welcome!',
                            status: 'success'
                        })
                        console.log('LogIn')
                    } else {
                        this.$store.dispatch('toastAdd', {
                            message: 'Bad server or token',
                            status: 'error'
                        })
                        console.log('Bad server or token')
                    }
                })
                .catch((error) => {
                    this.$store.dispatch('toastAdd', {
                        message: 'Cannot connect. Please check the information.',
                        status: 'error'
                    })
                    console.log(error)
                })
                .then(() => {
                    // Disable Loading
                    this.$store.commit('loadingDisable')
                });
    }

    }

}
</script>

