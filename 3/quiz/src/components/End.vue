<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>The End</template>
            <template v-slot:lead>
                You answered all the questions, {{numCorrect/total*100}}% of them correct.
            </template>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: ['numCorrect', 'total']
}
</script>