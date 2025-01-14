<template>
  <div
    class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8"
  >
    <div>
      <h2 class="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
        {{ productCategory }}
      </h2>
    </div>
    <div class="relative flex items-center space-x-4">
      <button
        @click="toggleDropdown"
        type="button"
        class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
      >
        <svg
          class="-ms-0.5 me-2 h-4 w-4"
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
          class="-me-0.5 ms-2 h-4 w-4"
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
        class="absolute z-10 right-0 top-8 mt-2 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow"
      >
        <ul
          class="p-2 text-left text-sm font-medium text-gray-500"
          aria-labelledby="sortDropdownButton"
        >
          <li v-for="sort in sorts" :key="sort.value">
            <a
              @click.prevent="selectSort(sort.value)"
              :class="[
                'group inline-flex w-full items-center rounded-md px-3 py-2 text-sm transition',
                selectedSort === sort.value
                  ? 'bg-gray-100 text-gray-900'
                  : 'hover:bg-gray-100 hover:text-gray-900 text-gray-500',
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
  name: "RouteStatus",

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
      this.$emit("sortChanged", value); // Emit the sort value to the parent
      console.log("Selected sort:", value);
    },
  },
};
</script>
