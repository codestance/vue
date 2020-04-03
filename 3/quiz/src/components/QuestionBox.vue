<template>
    <div >
        <b-jumbotron>
            <template v-slot:lead>
                {{question}}
            </template>
            <hr class="my-4">
            <b-list-group>
                <b-list-group-item button
                    v-for="(answer,index) in answers"
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="answerClass(index)">
                        {{answer}}
                </b-list-group-item>
            </b-list-group>
            <b-button 
                variant="primary"
                @click = "submitAnswer"
                :disabled = "selectedIndex === null || answered">
                    Submit
            </b-button>
            <b-button
                variant="success"
                @click ="nextQuestion"
                :disabled = "!answered">
                    Next
            </b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import shuffle from 'lodash.shuffle'
export default {
    props: {
        currentQuestion: Object,
        nextQuestion: Function,
        increment: Function
    },
    data(){
        return{
            selectedIndex: null,
            correctIndex: null,
            shuffledAnswers: [],
            answered: false
        }
    },
    computed: {
        answers() {
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            answers = answers.map(atob);
            return answers;
        },
        question: function(){
            return atob(this.currentQuestion.question);
        }
    },
    watch: {
        currentQuestion: {
            immediate: true,
            handler() {
                this.selectedIndex = null
                this.answered = false
                this.shuffleAnswers()
            }
        }
    },
    methods: {
        selectAnswer(index) {
          this.selectedIndex = index;
        },
        submitAnswer() {
            let isCorrect = false;
            if(this.selectedIndex === this.correctIndex){
                isCorrect = true;
            }
            this.answered = true;
            this.increment(isCorrect)
        },
        shuffleAnswers() {
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
            this.shuffledAnswers = shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
        },
        answerClass(index){
            let answerClass = ''
            if(!this.answered && this.selectedIndex === index){
                answerClass = 'selected'
            }else if(this.answered && this.correctIndex === index){
                answerClass = 'correct'
            }else if(this.answered && this.selectedIndex === index && this.correctIndex !== index){
                answerClass = 'incorrect'
            }
            return answerClass
        }
    }
}
</script>

<style scoped>
.list-group{
    margin-bottom: 15px;
}
.list-group-item:hover{
    background: #eee;
    cursor: pointer;
}
.btn{
    margin: 0 5px;
}
.selected{
    background-color: lightblue;
}
.correct{
    background-color:lightgreen;
}
.incorrect{
    background-color: lightcoral;
}
</style>