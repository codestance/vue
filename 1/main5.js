Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{task.description}}</task>
        </dvi>
    `,
    data(){
        return{
            tasks: [
                {description: 'Go to the store', completed: true},
                {description: 'Eat cake', completed: false},
                {description: 'Make dinner', completed: true},
                {description: 'Sleep a lot', completed: false},
                {description: 'Clean the house', completed: false},
                {description: 'Pack up', completed: true}
            ]
        }
    }
});
Vue.component('task', {
    template: '<li><slot></slot></li>'
});
new Vue({
    el:'#root'
})