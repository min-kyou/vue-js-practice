Vue.createAoo({
    data() {
        return {
            path: './images/wings.jp'
        };
    },
    methods: {
        onerror() {
            this.path = './images/noimage.jpg';

        }
    }
})