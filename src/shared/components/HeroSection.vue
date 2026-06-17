<template>
  <section
    class="relative mx-4 mt-6 overflow-hidden rounded-3xl sm:mx-6 lg:mx-8"
    aria-roledescription="carousel"
    aria-label="Featured highlights"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
  >
    <div class="relative h-[320px] sm:h-[400px] lg:h-[480px]">
      <transition name="hero-fade">
        <div :key="current.id" class="absolute inset-0">
          <div
            class="absolute inset-0 bg-gradient-to-r"
            :class="current.gradient"
          ></div>

          <div
            class="relative mx-auto flex h-full max-w-5xl items-center justify-between gap-6 px-6 sm:px-12 lg:px-16"
          >
            <div class="flex max-w-xl flex-col items-start gap-4">
              <span
                class="animate-fade-in-up rounded-full bg-accent-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm"
              >
                {{ current.badge }}
              </span>
              <h1
                class="animate-fade-in-up text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
                style="animation-delay: 0.05s"
              >
                {{ current.title }}
              </h1>
              <p
                class="animate-fade-in-up max-w-md text-sm text-slate-100/90 sm:text-base lg:text-lg"
                style="animation-delay: 0.1s"
              >
                {{ current.subtitle }}
              </p>
              <router-link
                :to="current.to"
                class="btn-accent animate-fade-in-up"
                style="animation-delay: 0.15s"
              >
                {{ current.cta }}
              </router-link>
            </div>

            <img
              v-if="current.image"
              :src="current.image"
              :alt="current.title"
              class="hidden max-h-[78%] w-2/5 animate-fade-in object-contain drop-shadow-2xl sm:block"
            />
          </div>
        </div>
      </transition>

      <!-- Previous / next controls -->
      <button
        type="button"
        class="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30 sm:flex"
        aria-label="Previous slide"
        @click="prev"
      >
        <ChevronLeftIcon class="h-5 w-5" />
      </button>
      <button
        type="button"
        class="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30 sm:flex"
        aria-label="Next slide"
        @click="next"
      >
        <ChevronRightIcon class="h-5 w-5" />
      </button>

      <!-- Slide indicators -->
      <div class="absolute inset-x-0 bottom-5 flex justify-center gap-2">
        <button
          v-for="(slide, i) in slides"
          :key="slide.id"
          type="button"
          class="h-2 rounded-full transition-all duration-300"
          :class="
            i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
          "
          :aria-label="`Go to slide ${i + 1}: ${slide.title}`"
          :aria-current="i === index"
          @click="goTo(i)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

export default {
  name: "HeroSection",
  components: { ChevronLeftIcon, ChevronRightIcon },
  props: {
    interval: {
      type: Number,
      default: 6000,
    },
  },
  data() {
    return {
      index: 0,
      timer: null,
      reducedMotion: false,
      slides: [
        {
          id: 1,
          badge: "New Season Drop",
          title: "Sell high-quality accessories for phones",
          subtitle:
            "Discover premium phone accessories that combine style, durability, and functionality. From protective cases to fast chargers — everything to upgrade your mobile experience.",
          cta: "Shop Now",
          to: "/products",
          image: "/headphones.png",
          gradient: "from-primary-900 via-primary-800 to-primary-600",
        },
        {
          id: 2,
          badge: "Best Sellers",
          title: "Power that keeps up with your day",
          subtitle:
            "Fast chargers and high-capacity power banks built for life on the go. Never run out of charge again.",
          cta: "Shop Charging",
          to: "/products",
          image: "/power-bank.png",
          gradient: "from-accent-700 via-accent-600 to-primary-800",
        },
        {
          id: 3,
          badge: "Audio Picks",
          title: "Immersive sound, anywhere you go",
          subtitle:
            "Crisp, powerful audio from our latest headphone and earbud collection — tuned for every track.",
          cta: "Explore Audio",
          to: "/products",
          image: "/headphoneBlue.png",
          gradient: "from-slate-900 via-primary-900 to-primary-700",
        },
      ],
    };
  },
  computed: {
    current() {
      return this.slides[this.index];
    },
  },
  mounted() {
    this.reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this.start();
  },
  beforeUnmount() {
    this.pause();
  },
  methods: {
    start() {
      // Respect users who prefer reduced motion: no auto-advancing carousel.
      if (this.reducedMotion || this.timer) return;
      this.timer = setInterval(this.next, this.interval);
    },
    pause() {
      clearInterval(this.timer);
      this.timer = null;
    },
    resume() {
      this.start();
    },
    next() {
      this.index = (this.index + 1) % this.slides.length;
    },
    prev() {
      this.index =
        (this.index - 1 + this.slides.length) % this.slides.length;
    },
    goTo(i) {
      this.index = i;
    },
  },
};
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.6s ease;
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .hero-fade-enter-active,
  .hero-fade-leave-active {
    transition: none;
  }
}
</style>
