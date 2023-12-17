<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>
    {{ geta(route.fullPath) }}
  </div>
</template>

<style scoped></style>
