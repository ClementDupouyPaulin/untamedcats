import Vue3Html2pdf from 'vue3-html2pdf'

export default defineNuxtPlugin(({ vueApp }) => {
    //vueApp.use('VueHtml2pdf')
    vueApp.component("vue3-html2pdf", Vue3Html2pdf)
})