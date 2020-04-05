<template>
  <div id="app">
    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />
    <b-container>
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length && index < total"
            :currentQuestion="questions[index]"
            :nextQuestion="nextQuestion"
            :increment="increment"
            :total="total"
          />
          <End 
            v-if="index === total"
            :numCorrect="numCorrect"
            :total="total"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'
import End from './components/End.vue'

export default {
  name: 'app',
  components: {
    Header,
    QuestionBox,
    End
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      total: 0
    }
  },
  methods: {
    nextQuestion() {
      this.index++
    },
    increment(isCorrect){
      if(isCorrect){
        this.numCorrect++
      }
      if(this.numTotal<this.total){
        this.numTotal++
      }
    }
  },
  mounted: function(){
    fetch('https://opentdb.com/api.php?amount=20&category=17&type=multiple&encode=base64',{
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results;
      this.total = this.questions.length;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
