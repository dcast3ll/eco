// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        lucide: [
          'arrow-right',
          'bath',
          'bed-double',
          'calendar',
          'check',
          'chevron-down',
          'container',
          'droplets',
          'hammer',
          'home',
          'leaf',
          'mail',
          'map-pin',
          'menu',
          'moon',
          'phone',
          'recycle',
          'ruler',
          'send',
          'shield-check',
          'sofa',
          'star',
          'sun',
          'thermometer-snowflake',
          'timer',
          'tree-pine',
          'x',
          'zap',
        ],
        'simple-icons': ['facebook', 'instagram', 'whatsapp'],
      },
    }),
  ],
});
