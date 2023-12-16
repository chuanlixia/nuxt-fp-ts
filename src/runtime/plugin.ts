import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Plugin injected by my-module!");
  nuxtApp.hook("app:created", (app) => {
    console.log("app created", app.version);
  });
  nuxtApp.hook("app:beforeMount", () => {
    console.log("app before mount");
  });
});
