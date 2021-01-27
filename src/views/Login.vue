<template>
  <div class="login">
      <form>
          <div class="form-group">
              <label class="form-label" for="input-example-1">Name</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="Name">
          </div>
          <div class="form-group">
              <label class="form-label" for="input-example-1">Name</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="Name">
          </div>
          <button class="btn login__btn">Login</button>
      </form>
  </div>
</template>

<style lang="sass">
$color__glosa: #E18AD4

.login
  .btn
    &, &:active
      color: $color__glosa
      border-color: $color__glosa
  &__btn
    display: block
    margin: 1rem auto
</style>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  components: {
  }
}
</script>

