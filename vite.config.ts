// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://loripsum.net',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa'

// export default defineConfig({
//     plugins: [
//         react(),
//         VitePWA({
//             registerType: 'autoUpdate',
//             injectRegister: 'auto',
//             workbox: {
//                 clientsClaim: true,
//                 skipWaiting: true
//             },
//             devOptions: {
//                 enabled: true
//             }
//         })
//     ]
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            workbox: {
                clientsClaim: true,
                skipWaiting: true,
            },
            devOptions: {
                enabled: true,
            },
        }),
    ],
    server: {
        proxy: {
            "/api": {
                target: "https://loripsum.net",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
