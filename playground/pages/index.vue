<script setup lang="ts">
const route = useRoute();
const u = io_type({
  userId: io_number,
  name: io_string,
});
const data = { userId: "1", name: "xx" };
const decoded = u.decode(data);
</script>

<template>
  <div>
    <div>{{ geta(route.fullPath) }}</div>
    <div>{{ decoded }}</div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>
      Current route:
      {{ route.path }}
    </p>
    <a
      href="https://nuxt.com/docs/getting-started/routing"
      target="_blank"
    >Learn more about Nuxt Routing</a>
  </div>
</template>
