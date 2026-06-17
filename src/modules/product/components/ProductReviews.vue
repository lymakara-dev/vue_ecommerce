<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-xl font-bold text-slate-900 sm:text-2xl">Reviews</h2>

    <div
      v-for="(review, index) in reviews"
      :key="index"
      class="card flex flex-col gap-2 p-4"
    >
      <div class="flex items-center gap-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <i class="fa-solid fa-user text-sm"></i>
        </div>
        <div>
          <p class="text-sm font-semibold text-slate-900">{{ review.username }}</p>
          <p class="text-xs text-slate-400">{{ review.Date }}</p>
        </div>
      </div>
      <p class="text-sm text-slate-600">{{ review.comment }}</p>
    </div>

    <textarea
      rows="3"
      class="input-field resize-none"
      placeholder="Write your comment here"
      @input="autoResize"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "ProductReviews",
  props: {
    reviews: Array,
  },

  methods: {
    autoResize(event) {
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
  },
};
</script>
