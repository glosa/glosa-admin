<template>
  <div class="login">
      <img class="login__logo" alt="Logo" src="img/icons/apple-touch-icon-152x152.png"/>
      <form>
          <div class="form-group">
              <label class="form-label" for="input-url">URL Server</label>
              <input
                  v-model="url"
                  @keypress.enter="validateForm ? getAuthorization: null"
                  class="form-input"
                  type="text"
                  id="input-url"
                  placeholder="https://my-glosa-instance.com"
              >
          </div>
          <div class="form-group">
              <label class="form-label" for="input-token">Token</label>
              <input
                  v-model="token"
                  @keypress.enter="validateForm ? getAuthorization: null"
                  class="form-input"
                  type="text"
                  id="input-token"
                  placeholder="q1w2e23r4t..."
              >
          </div>
          <Loading v-if="$store.state.loading" class="loading-lg" />
          <Button
              v-else
              text="LogIn"
              @click.native="getAuthorization"
              class="login__btn"
              :disabled="validateForm"
          />
      </form>
  </div>
</template>

<script>

import axios from "axios"
import Loading from "@/components/Loading"
import Button from "@/components/Button"


export default {
  name: 'LogIn',
  components: {
      Button,
      Loading
  },
  data: function () {
      return {
          url: '',
          token: ''
      }
  },
  mounted: function () {
      this.url = this.$store.state.url
      this.token = this.$store.state.token
  },
  computed: {
      validateForm: function () {
          return this.url === '' || this.token === '';
      }
  },
  methods: {
      getAuthorization: function () {
          // Show Loading
          this.$store.commit('loadingEnable')
          // config Axios
          axios.defaults.baseURL = this.url
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
          axios
            .post(`${this.url}${this.$store.state.preURLAPI}token/check/`)
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

