<template>
  <button
      class="btn btn-primary"
      :disabled="$store.state.loading"
  >
      {{ text }}
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>
