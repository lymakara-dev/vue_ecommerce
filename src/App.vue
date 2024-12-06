<template>
  <RouterView />
</template>

<script>
import HomePage from "./Views/HomePage.vue";

export default {
  name: "App",
  components: { HomePage },
};
</script>
