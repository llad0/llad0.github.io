import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://llad0.github.io', 
  integrations: [tailwind()],
});