<template>
  <div class="login">
      <img class="login__logo" alt="Logo" src="img/icons/apple-touch-icon-152x152.png"/>
      <form>
          <div class="form-group">
              <label class="form-label" for="input-url">URL Server</label>
              <input
                  v-model="url"
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
                  class="form-input"
                  type="text"
                  id="input-token"
                  placeholder="q1w2e23r4t..."
              >
          </div>
          <Button
              text="LogIn"
              @click.prevent="checkToken"
              class="login__btn"
              :disabled="url === '' || token === ''"
          />
      </form>
  </div>
</template>

<script>

import axios from "axios"
import Button from "@/components/Button"

//axios.defaults.baseURL = 'https://api.example.com';

export default {
  name: 'LogIn',
  components: {
      Button
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
            .post(`${this.$store.state.preURLAPI}token/check/`)
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

