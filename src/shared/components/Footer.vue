<template>
  <footer class="mt-12 bg-slate-900 text-slate-300">
    <div
      class="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8"
    >
      <div>
        <h3 class="text-2xl font-extrabold text-white">PhoneEdge</h3>
        <p class="mt-2 max-w-xs text-sm text-slate-400">
          Premium phone accessories that combine style, durability, and
          everyday performance.
        </p>
        <p class="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
          We accept
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <img
            v-for="method in paymentMethods"
            :key="method.alt"
            :src="method.src"
            :alt="method.alt"
            class="h-8 rounded-md bg-white p-1 transition-transform duration-200 hover:-translate-y-0.5"
          />
        </div>
      </div>

      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wider text-white">
          Follow Us
        </h4>
        <ul class="mt-4 space-y-3 text-sm">
          <li v-for="social in socials" :key="social.label">
            <a
              :href="social.href"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-accent-400"
            >
              <i :class="social.icon" class="text-base transition-transform duration-200 group-hover:scale-110"></i>
              {{ social.label }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wider text-white">
          Contact Us
        </h4>
        <ul class="mt-4 space-y-3 text-sm text-slate-400">
          <li class="flex items-center gap-3">
            <i class="fa-regular fa-envelope"></i>
            <a href="mailto:info@PhoneEdge.com" class="transition-colors duration-200 hover:text-accent-400">
              info@PhoneEdge.com
            </a>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-phone"></i>
            (+855) 018 116 666
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-phone"></i>
            (+855) 061 116 666
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-brands fa-telegram"></i>
            <a
              href="https://t.me/c/2252504820/1"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-200 hover:text-accent-400"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
      © {{ year }} PhoneEdge. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
      paymentMethods: [
        { src: "/ABA.png", alt: "ABA" },
        { src: "/Acleda.png", alt: "Acleda" },
        { src: "/Canadia.png", alt: "Canadia" },
        { src: "/PayPal.png", alt: "PayPal" },
        { src: "/VISA.png", alt: "VISA" },
        { src: "/Wing.png", alt: "Wing" },
      ],
      socials: [
        { label: "Facebook", href: "https://facebook.com", icon: "fa-brands fa-facebook" },
        { label: "TikTok", href: "https://tiktok.com", icon: "fa-brands fa-tiktok" },
        { label: "YouTube", href: "https://youtube.com", icon: "fa-brands fa-youtube" },
        { label: "Threads", href: "https://threads.net", icon: "fa-brands fa-threads" },
      ],
    };
  },
};
</script>
