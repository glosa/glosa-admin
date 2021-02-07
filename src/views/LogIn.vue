<template>
  <div class="login">
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

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


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
        axios
            .post(`${this.url}${urlAPI}token/check/`, {headers: {'Authorazation': `Bearer ${this.token}`}})
                .then(function (response) {
                    // Save id and go to next Page
                    if(response.status === 200) {
                        //that.$store.commit("setUserLogged", response.data.login_info);
                        //that.$store.commit("changeFirst");
                        //that.$router.push("Flow");
                        console.log('sssssii')
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
    }
  }
}
</script>

