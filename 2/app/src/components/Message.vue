<template>
  <div class="box">
    <p>
        <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Message',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{ background: #e3e3e3; padding:10px; border: 1px solid #e5e5e5; margin: 10px}
</style>