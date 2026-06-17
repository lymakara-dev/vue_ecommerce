<template>
  <div class="mb-1 mt-2 flex flex-wrap items-center gap-2">
    <div class="flex items-center gap-0.5">
      <svg
        v-for="index in 5"
        :key="index"
        class="h-4 w-4"
        :class="
          index <= Math.round(ratingPoint) ? 'text-accent-400' : 'text-slate-200'
        "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
    </div>

    <span class="badge-accent">{{ ratingPoint }}</span>
  </div>
</template>

<script>
export default {
  name: "RatingStar",
  props: {
    ratingPoint: {
      type: Number,
      required: true,
    },
  },
};
</script>
