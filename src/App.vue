<template>
  <div class="app container">
      <Loading v-if="$store.state.loading" />
      <div v-if="$store.state.authorization" id="nav">
      <router-link to="/">All</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import Loading from "@/components/Loading"

export default {
  name: 'App',
  components: {
      Loading
  }
}
</script>


