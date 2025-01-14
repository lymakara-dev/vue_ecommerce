<template>
  <div>
    <div class="mb-2">
      <label
        :for="id"
        class="text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {{ label }}
      </label>
    </div>
    <div class="flex w-full rounded-lg pt-1">
      <div class="relative w-full">
        <input
          :id="id"
          :type="type"
          :name="name"
          :placeholder="placeholder"
          :required="required"
          class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
          />
          <div class="absolute gap-x-5">
            <UserCircleIcon />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserCircleIcon } from '@heroicons/vue/24/outline';

export default {
  name: "InputField",
  components: {UserCircleIcon},
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
