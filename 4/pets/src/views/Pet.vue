<template>
    <div>
        <!-- {{$route.params.species}} -->
        <!-- {{$route.params.id}} -->
        <!-- {{pet().name}} -->
       <h1>{{animal.name}}</h1>
       <p>{{animal.age}}</p>
       <p>{{animal.breed}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animals = this[this.$route.params.speacies][this.$route.params.id]
    this.animal = animals
  }
}
</script>
