<template>
  <div class="box">
      <h2>The count is: {{count}}</h2>
      <button @click="count+=1">Increment the count</button>
  </div>
    
</template>

<script>
export default {
  name: 'Counter',
  data() {
      return { count: 0 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{margin: 10px; padding: 10px; border: 1px solid #b5b5b5;}
</style>