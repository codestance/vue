export default {
  appendPet: (state, { speacies, pet }) => {
    state[speacies].push(pet)
  }
}
