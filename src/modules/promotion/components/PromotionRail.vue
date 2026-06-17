<template>
  <!--
    Sliding promo banner that lives in the empty gutter beside the centered
    (max-w-7xl) page content. It is positioned relative to that content column,
    so it never overlaps the page content. A sticky inner card keeps it in view
    while scrolling, clears the sticky navbar (top offset), and is bounded by
    the content height so it stops before the footer instead of covering it.

    Only shown once the viewport is wide enough (>=1700px) to have real free
    space on the sides. Width fills the gutter minus breathing room, capped at
    22rem: min((100vw - 80rem)/2 - 3rem, 22rem).
  -->
  <aside
    class="absolute inset-y-0 z-10 hidden w-[min(calc((100vw_-_80rem)/2_-_3rem),22rem)] min-[1700px]:block"
    :class="side === 'left' ? 'right-full mr-6' : 'left-full ml-6'"
    aria-label="Promotions"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
  >
    <div class="sticky top-[88px] h-[calc(100vh-7rem)] max-h-full">
      <div class="relative h-full">
        <transition name="rail-fade">
          <router-link
            :key="current.id"
            to="/promotion-products"
            class="card card-hover group absolute inset-0 flex flex-col gap-4 overflow-hidden p-5 pb-12"
          >
            <div
              class="flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-primary-50 p-5"
            >
              <img
                :src="current.image"
                :alt="current.title"
                class="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span class="badge-accent w-fit">Promo</span>
            <h4 class="text-lg font-bold leading-snug text-slate-900">
              {{ current.title }}
            </h4>
            <p class="line-clamp-3 text-sm leading-relaxed text-slate-500">
              {{ current.description }}
            </p>
            <span
              class="text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700"
            >
              Shop now &rarr;
            </span>
          </router-link>
        </transition>

        <!-- Slide controls sit outside the cross-fading card (so clicks don't
             navigate) but inside the sticky box so they track the card. -->
        <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          <button
            v-for="(promo, i) in promotions"
            :key="promo.id"
            type="button"
            class="h-2 rounded-full transition-all duration-300"
            :class="
              i === index
                ? 'w-6 bg-primary-500'
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            "
            :aria-label="`Show promotion: ${promo.title}`"
            :aria-current="i === index"
            @click="goTo(i)"
          ></button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import promotions from "../data/promotions.js";

export default {
  name: "PromotionRail",
  props: {
    side: {
      type: String,
      default: "left",
      validator: (value) => ["left", "right"].includes(value),
    },
    interval: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      promotions,
      // Offset the right rail so the two sides don't show the same promo.
      index: this.side === "right" ? Math.floor(promotions.length / 2) : 0,
      timer: null,
      reducedMotion: false,
    };
  },
  computed: {
    current() {
      return this.promotions[this.index];
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
      this.index = (this.index + 1) % this.promotions.length;
    },
    goTo(i) {
      this.index = i;
    },
  },
};
</script>

<style scoped>
.rail-fade-enter-active,
.rail-fade-leave-active {
  transition: opacity 0.5s ease;
}
.rail-fade-enter-from,
.rail-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .rail-fade-enter-active,
  .rail-fade-leave-active {
    transition: none;
  }
}
</style>
