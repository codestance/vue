Vue.component('coupon',{
    template: `<input placeholder="Enter your coupon code" @blur="onCouponLocal">`,
    methods: {
        onCouponLocal() {
            alert('aaaaa');
            this.$emit('applied')
        }
    }
})
new Vue({
    el:'#root',
    data: {
        couponIsApplied: false
    },
    methods: {
        onCouponApplied(){
            alert('parent knows');
            this.couponIsApplied = true;
        }
    }
})