Vue.createApp({
    data() {
        return {
            message: 'こんにちは、世界！'
        };
    },
    mounted() {
        this.message = 'はじめまして、Vue.js!';
        console.log(this.message);
        console.log(this.$el.textContent.includes(this.message));
    }
}).mount('#app');