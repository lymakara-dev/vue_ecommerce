<template>
  <Teleport to="body">
    <div
      class="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-2 p-4 sm:items-end sm:p-6"
    >
      <TransitionGroup name="toast">
        <div
          v-for="toast in toastStore.toasts"
          :key="toast.id"
          class="card pointer-events-auto flex w-full max-w-sm items-start gap-3 p-4 shadow-lg"
        >
          <component
            :is="icons[toast.type] || icons.info"
            class="h-5 w-5 shrink-0"
            :class="iconColors[toast.type] || iconColors.info"
          />
          <p class="flex-1 text-sm font-medium text-slate-700">{{ toast.message }}</p>
          <button
            type="button"
            class="text-slate-400 transition-colors hover:text-slate-600"
            aria-label="Dismiss notification"
            @click="toastStore.dismiss(toast.id)"
          >
            <XMarkIcon class="h-4 w-4" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { useToastStore } from "@/shared/store/toast.store";

const toastStore = useToastStore();

const icons = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  info: InformationCircleIcon,
};

const iconColors = {
  success: "text-primary-600",
  error: "text-red-500",
  info: "text-slate-400",
};
</script>
