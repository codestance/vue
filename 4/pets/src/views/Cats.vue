<template>
    <div>
        <h1>Cats for adoption</h1>
        <b-table striped hover :items="cats">
            <template  v-slot:cell(name)="cats">
                <router-link :to="`/pets/cats/${cats.index}`">
                    {{ cats.value }}
                </router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// import cats from '@/data/cats'

export default {
  // data () {
  //   return {
  //     cats
  //   }
  // },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
