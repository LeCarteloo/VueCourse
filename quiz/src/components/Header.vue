<template>
    <div>
        <div>
            <b-nav tabs>
                <b-nav-item disabled><b>QuizApp</b></b-nav-item>
                <b-nav-item disabled><b>Counter: {{ numCorrect }}/{{ numTotal }}</b></b-nav-item>
            </b-nav>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        numTotal: Number,
        numCorrect: Number,
    }
    // props: [          <-- The other way to catch those varaibles from other Vue template
    //     'numCorrect',
    //     'numTotal',
    // ]
}
</script>