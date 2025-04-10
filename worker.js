export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Try to fetch the original file first
    const response = await fetch(request);

    // If file exists, return it
    if (response.status !== 404) {
      return response;
    }

    // Otherwise, return index.html for SPA fallback
    return fetch(`${url.origin}/index.html`);
  },
};
