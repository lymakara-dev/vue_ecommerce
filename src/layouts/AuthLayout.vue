<template>
  <div class="min-h-screen bg-slate-50">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
