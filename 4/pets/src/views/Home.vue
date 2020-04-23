<template>
  <div class="home">
    <b-jumbotron bg-variant="warning">
      <template v-slot:header>Adopt a new friend</template>
      <template v-slot:lead>
        We have {{ animalsCount }} animals ready to adopting,
        including {{ getAllCats.length }} cats and {{ getAllDogs.length }} dogs.
      </template>
      <hr class="my-4">
      <p>If you know a pet, that needs a new family, add it here</p>
      <b-button @click="togglePetForm" class="btn-success">Add new pet</b-button>
      <b-row class="justify-content-center mt-3">
        <b-col cols="8">
          <b-form @submit,prevent="handleSubmit" v-if="showPetForm">

            <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
              <b-form-input
                id="input-2"
                type="text"
                v-model="formData.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Species:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="formData.species"
                :options="['cats', 'dogs']"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
              <b-form-input
                id="input-2"
                type="number"
                v-model="formData.age"
                required
                placeholder="Enter age"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
