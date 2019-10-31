Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible:true
        };
    },
    template: `
        <article class="message is-info" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <button type="button" @click="hideMessage">X</button>
                <button class="delete" @click="isVisible=false"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
    `,
    methods: {
        hideMessage() {
            this.isVisible = false;
        }
    }
});
// hide message with methods:
// <button type="button" @click="hideMessage">X</button>
// hideMessage() {
//     this.isVisible = false;
// }
// return {
//     isVisible:true
// };
//<article class="message is-info" v-show="isVIsible"></article>

// hide message inline:
// <button type="button" @click="hideMessage">X</button>
// without methods

new Vue({
    el:'#root'
})