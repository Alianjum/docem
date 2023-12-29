<template>
  <div v-if="loading" class="loading">
    <section class="loading-overlay">
      <div class="Loading-Page">
        <h2 class="loader">Loading</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
