<template>
    <div>
        <b-jumbotron>
            <template #lead>
            {{ currentQuestion.question }}
            </template>

            <hr class="my-4">

            <p>
                <b-list-group>
                    <b-list-group-item  
                    v-for="(answer, index) in shuffledAnswers" 
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="answerClass(index)">
                        {{ answer }}
                    </b-list-group-item>
                </b-list-group>
            </p>

            <b-button 
                variant = "primary"
                @click = "submitAnswer"
                :disabled = "selectedIndex === null || answered">
            Sumbit
            </b-button>
                <b-button 
                variant = "success" 
                :class = "{none: indexOfQuestion === 9 }"
                @click = "nextQuestion">
            Next    
            </b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    // Here the props are being recived from the App.vue
    // Where this variables/functions are binded to the
    // QuestionBox template.
    props: {
        currentQuestion: Object,
        nextQuestion: Function,
        increment: Function,
        indexOfQuestion: Number,

    },
    data() {
        return {
            selectedIndex: null,
            correctIndex: null,
            shuffledAnswers: [],
            answered: false,
        }
    },
    computed: {
        answers() {
            // Copy of an array ... <- And also this function is not in used
            // Instead in use is the function shuffleAnswers()
            let answers = [...this.currentQuestion.incorrect_answers]
            answers.push(this.currentQuestion.correct_answer)
            return answers
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
        // {
        //     this.selectedIndex = null
        //     this.shuffleAnswers()
        // }
    },
    methods: {
        selectAnswer(index) {
            this.selectedIndex = index
        },
        shuffleAnswers() {
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)

            // console.log(this.currentQuestion.correct_answer + " " + this.correctIndex) <-- Answers
        },
        submitAnswer() {
            this.answered = true
            let isCorrect = false

            if(this.selectedIndex === this.correctIndex) {
                isCorrect = true
            }
            
            this.increment(isCorrect)
        },
        answerClass(index) {
            let answerClass = ''

            if(!this.answered && this.selectedIndex === index) {
                answerClass = 'selected'
            } else if(this.answered && this.correctIndex === index) {
                answerClass = 'correct'
            } else if(this.answered && this.selectedIndex === index && this.correctIndex !== index) {
                answerClass = 'incorrect'
            }

            return answerClass
        }
    },
}
</script>

<style scoped>
    .list-group {
        padding-bottom: 10px;
    }
    .btn {
        margin-right: 10px;
    }
    .list-group-item:hover {
        cursor: pointer;
    }
    .selected {
        background-color: aquamarine;
    }
    .correct {
        background-color: chartreuse;
    }
    .incorrect {
        background-color: red;
    }
    .none {
        display: none;
    }
</style>
