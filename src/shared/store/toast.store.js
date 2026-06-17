import { defineStore } from "pinia";

let nextId = 0;

export const useToastStore = defineStore("toast", {
  state: () => ({
    toasts: [],
  }),

  actions: {
    show(message, type = "success", duration = 3000) {
      const id = ++nextId;
      this.toasts.push({ id, message, type });
      setTimeout(() => this.dismiss(id), duration);
    },
    success(message, duration = 3000) {
      this.show(message, "success", duration);
    },
    error(message, duration = 3000) {
      this.show(message, "error", duration);
    },
    info(message, duration = 3000) {
      this.show(message, "info", duration);
    },
    dismiss(id) {
      this.toasts = this.toasts.filter((toast) => toast.id !== id);
    },
  },
});
