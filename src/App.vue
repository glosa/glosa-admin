<template>
  <div class="app container">
      <div class="toasts">
        <Toast
            v-for="(toast, index) in $store.state.toasts"
            :key="index"
            :status="toast.status"
            :message="toast.message"
        />
      </div>
      <div v-if="$store.state.authorization" id="nav">
      <router-link :to="{ name: 'Comments' }">All</router-link> |
      <a href="#" @click="logOut">LogOut</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Toast from "@/components/Toast"

export default {
  name: 'App',
  components: {
      Toast
  },
  mounted: function () {
     this.$store.commit('autoLogin')
  },
  methods: {
     logOut: function () {
         this.$store.commit('logOut')
     }
  }
}
</script>


