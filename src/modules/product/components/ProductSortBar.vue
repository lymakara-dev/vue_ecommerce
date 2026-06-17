<template>
  <div class="mb-4 flex items-end justify-between gap-4 sm:mb-8">
    <h2 class="text-xl font-bold text-slate-900 sm:text-2xl">
      {{ productCategory }}
    </h2>
    <div class="relative">
      <button
        @click="toggleDropdown"
        type="button"
        class="btn-secondary"
      >
        <svg
          class="h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
          />
        </svg>
        Sort
        <svg
          class="h-4 w-4 transition-transform duration-200"
          :class="{ 'rotate-180': isDropdownOpen }"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      <div
        v-if="isDropdownOpen"
        class="animate-scale-in absolute right-0 top-full z-10 mt-2 w-44 origin-top-right rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg"
      >
        <ul class="flex flex-col gap-0.5 text-sm font-medium text-slate-600">
          <li v-for="sort in sorts" :key="sort.value">
            <a
              @click.prevent="selectSort(sort.value)"
              :class="[
                'block w-full rounded-lg px-3 py-2 text-sm transition-colors duration-150',
                selectedSort === sort.value
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
              ]"
              href=""
            >
              {{ sort.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSortBar",

  props: {
    productCategory: String,
    mostPopular: String,
    increasingPrice: String,
    decreasingPrice: String,
    discount: String,
  },
  data() {
    return {
      isDropdownOpen: false,
      selectedSort: "",
      sorts: [
        { value: "mostPopular", label: "The most popular" },
        { value: "discount", label: "Discount %" },
        { value: "increasingPrice", label: "Increasing price" },
        { value: "decreasingPrice", label: "Decreasing price" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectSort(value) {
      this.selectedSort = value;
      this.isDropdownOpen = false;
      this.$emit("sortChanged", value);
    },
  },
};
</script>
