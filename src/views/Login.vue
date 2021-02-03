<template>
  <div class="login">
      <form>
          <div class="form-group">
              <label class="form-label" for="input-url">URL</label>
              <input class="form-input" type="text" id="input-url" placeholder="https://mi-glosa.com">
          </div>
          <div class="form-group">
              <label class="form-label" for="input-token">Token</label>
              <input class="form-input" type="text" id="input-token" placeholder="q1w2e23r4t...">
          </div>
          <button class="btn btn-primary login__btn">Login</button>
      </form>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  components: {
  }
}
</script>

