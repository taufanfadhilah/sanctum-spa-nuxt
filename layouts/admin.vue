<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['isAdmin'],
}
</script>

<style scoped>
div {
  background: blue;
}
</style>
