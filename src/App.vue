<template>
  <div class="app container">
      <div v-if="$store.state.authorization" id="nav">
      <router-link to="/">All</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
.app
  &__title
    text-align: center
    margin-top: 1rem
    font-size: 1.3rem
</style>
