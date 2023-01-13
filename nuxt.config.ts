// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    css: ['assets/main.css', 'element-plus/dist/index.css'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    }
})
