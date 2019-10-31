Vue.component('task', {
    template: '<li>{{message}}</li>',
    data() {
        return {
            message: 'Do something'
        };
    }
});

new Vue({
    el: '#root'
});