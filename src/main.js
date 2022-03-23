import { createApp } from 'vue'
import App from './App.vue'
import directives from "@/directives"

const app = createApp(App);

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.mount('#app')


