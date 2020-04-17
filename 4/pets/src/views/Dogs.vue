<template>
    <div>
        <h1>Dogs for adoption</h1>
        <b-table striped hover :items="dogs">
            <template  v-slot:cell(name)="dogs">
                <router-link :to="`/pets/dogs/${dogs.index}`">
                    {{ dogs.value }}
                </router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// import dogs from '@/data/dogs'
export default {
  // data () {
  //   return {
  //     dogs
  //   }
  // }
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
