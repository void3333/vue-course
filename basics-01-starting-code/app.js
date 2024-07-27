const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course!',
            courseGoalB: '<h2>TEST H2</h2>',
            googleLink: 'https://google.com/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber <= 0.5) {
                return 'Learn Vue';
            } else {
                return 'Learn other things...'
            }
        }
    }
});

app.mount('#user-goal');