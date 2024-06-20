import { useRuntimeConfig } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('api', {
    get: async (url, options = {}) => {
      console.log(`GET request to ${url} with options:`, options);
      const config = useRuntimeConfig();
      const response = await fetch(`${config.public.baseURL}${url}`, {
        ...options,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });
      return response.json();
    },
    post: async (url, body, options = {}) => {
      console.log(`POST request to ${url} with body:`, body);
      const config = useRuntimeConfig();
      const response = await fetch(`${config.public.baseURL}${url}`, {
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        body: JSON.stringify(body)
      });
      return response.json();
    }
  });
});
