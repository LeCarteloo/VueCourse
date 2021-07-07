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
                    v-for="(answer, index) in answers" 
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="[selectedIndex === index ? 'selected' : '']">
                        {{ answer }}
                    </b-list-group-item>
                </b-list-group>
            </p>

            <b-button variant="primary" href="#">Sumbit</b-button>
            <b-button variant="success" @click="nextQuestion" href="#">Next</b-button>
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
        nextQuestion: Function

    },
    data() {
        return {
            selectedIndex: null,
            shuffledAnswers: []
        }
    },
    computed: {
        answers() {
            // Copy of an array ... <-
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
        }
    },
    mounted() {
        console.log(this.currentQuestion)
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
        opacity: 0.5;
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
</style>
