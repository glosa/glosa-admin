<template>
  <div class="login">
      <img class="login__logo" alt="Logo" src="img/icons/apple-touch-icon-152x152.png"/>
      <form>
          <div class="form-group">
              <label class="form-label" for="input-url">URL</label>
              <input
                  v-model="url"
                  class="form-input"
                  type="text"
                  id="input-url"
                  placeholder="https://mi-glosa.com"
              >
          </div>
          <div class="form-group">
              <label class="form-label" for="input-token">Token</label>
              <input
                  v-model="token"
                  class="form-input"
                  type="text"
                  id="input-token"
                  placeholder="q1w2e23r4t..."
              >
          </div>
          <button
              @click.prevent="checkToken"
              class="btn btn-primary login__btn"
          >Login</button>
      </form>
  </div>
</template>

<script>

import axios from "axios"

const urlAPI = '/api/v1/'

//axios.defaults.baseURL = 'https://api.example.com';

export default {
  name: 'LogIn',
  components: {
  },
  data: function () {
      return {
          url: '',
          token: ''
      }
  },
  methods: {
    checkToken: function () {
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        axios
            .post(`${this.url}${urlAPI}token/check/`)
                .then(function (response) {
                    // Save id and go to next Page
                    console.log(response)
                    if(response.data.valid) {
                        //that.$store.commit("setUserLogged", response.data.login_info);
                        //that.$store.commit("changeFirst");
                        //that.$router.push("Flow");
                        console.log('sssssii yupi')
                    } else {
                        console.log('noooo')
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
    }
  }
}
</script>

