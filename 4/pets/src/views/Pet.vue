<template>
    <div>
        <!-- {{$route.params.speacies}} -->
        <!-- {{$route.params.id}} -->
        {{pet().name}}
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
  methods: {
    pet () {
      const animals = this[this.$route.params.speacies][this.$route.params.id]
      return animals
    }
  }
}
</script>
