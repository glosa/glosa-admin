<template>
  <div class="app container">
      <!-- Toast -->
      <div class="toasts">
        <Toast
            v-for="(toast, index) in $store.state.toasts"
            :key="index"
            :status="toast.status"
            :message="toast.message"
        />
      </div>
      <!-- Nav -->
      <header v-if="$store.state.authorization" class="navbar">
          <section class="navbar-section">
              <router-link class="navbar-brand mr-2" :to="{ name: 'Comments' }">
                  <img class="brand" alt="Brand" src="img/icons/apple-touch-icon-152x152.png">
              </router-link>
          </section>
          <section class="navbar-section text-center navbar__title">{{ this.$route.name }}</section>
          <section class="navbar-section">
              <a href="#"  class="btn btn-link" @click="logOut">LogOut</a>
          </section>
      </header>
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


