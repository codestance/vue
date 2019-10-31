// //every vue instance can listen and emits events
// // so we created root vue instance for sharing events
// window.Event = new Vue(); 
// Vue.component('coupon',{
//     template: `<input placeholder="Enter your coupon code" @blur="onCouponLocal">`,
//     methods: {
//         onCouponLocal() {
//             Event.$emit('applied') //broadcasting to every component within this instance
//         }
//     }
// })
// new Vue({
//     el:'#root',
//     data: {
//         couponIsApplied: false
//     },
//     created() {
//         Event.$on('applied', () => alert('Handling it!')) // listen for shared events
//     }
// })

//or the second way - wrap $ API
window.Event = new class{
    constructor() {
        this.vue = new Vue();
    }
    fire(event, data=null) {
        this.vue.$emit(event,data)
    }
    listen(event, callback) {
        this.vue.$on(event, callback)
    }
}
Vue.component('coupon',{
    template: `<input placeholder="Enter your coupon code" @blur="onCouponLocal">`,
    methods: {
        onCouponLocal() {
            Event.fire('applied'); 
        }
    }
});
new Vue({
    el:'#root',
    created() {
        Event.listen('applied', () => alert('Handling it!')) 
    }
})