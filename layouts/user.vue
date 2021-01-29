<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['isUser'],
}
</script>

<style scoped>
div {
  background: green;
}
</style>
