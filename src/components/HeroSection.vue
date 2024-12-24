<template>
  <figure
    class="relative max-h-[300px] md:max-h-[400px] lg:max-h-[500px] max-w-full overflow-hidden"
  >
    <a href="#">
      <img
        class="max-w-full max-h-full transition-all duration-300 blur-sm hover:blur-none object-cover"
        src="../assets/images/bg-signin.jpg"
        alt="image description"
      />
    </a>
    <figcaption
      class="absolute w-4/6 text-white text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="flex flex-col justify-center items-center gap-4 max-sm:gap-1">
        <span
          class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl md:text-4xl lg:text-5xl"
        >
          Sell high-quality accessories for phones
        </span>
        <p class="text-sm md:text-base lg:text-lg xl:text-xl">
          Discover premium phone accessories that combine style, durability, and
          functionality. From protective cases to fast chargers, we have
          everything to upgrade your mobile experience!
        </p>
      </div>
      <div class="pt-8 max-sm:pt-1">
        <SearchField />
      </div>
    </figcaption>
  </figure>
</template>

<script>
import SearchField from "./SearchField.vue";

export default {
  name: "HeroSection",
  components: { SearchField },
};
</script>
