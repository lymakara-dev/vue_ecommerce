<template>
  <nav class="bg-red-300 p-8">
    <div class="m-auto w-full flex flex-row justify-between items-center">
      <div class="text-primary text-4xl font-bold">PhoneEdge</div>
      <div class="flex flex-row gap-3 items-center">
        <InformationCircleIcon class="h-6 w-6" />
        <div>Need Help?</div>
        <div>
          <img
            class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="./../../assets/images/headphone.png"
            alt="Bordered avatar"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {
  InformationCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/24/outline";
export default {
  name: "Navbar",
  components: {
    ShoppingBagIcon,
    InformationCircleIcon,
    
  },
};
</script>
