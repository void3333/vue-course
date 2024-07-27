//create view app
const app = Vue.createApp({
    data() {
        return {
            name: 'John Smith',
            age: 20,
            url: 'https://picsum.photos/id/237/200/300',
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    }
});

app.mount('#assignment');