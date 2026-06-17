<template>
  <router-link to="/products" class="btn-secondary group w-fit">
    <svg
      class="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    Back to Products
  </router-link>
</template>

<script>
export default {
  name: "Back",
};
</script>
