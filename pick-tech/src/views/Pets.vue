<template>
    <div>
        <h1>{{ animal.name }} - {{ $route.params.species }}</h1>
        <p>Age: {{ animal.age }} years old</p>
        <p>Gender: {{ animal.gender }}</p>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
/* eslint-disable */
  data() {
    return {
        animal: {}
    };
  },
  computed: {
    //   cats () {
    //       return this.$store.state.cats
    //   } This is other way to do it.
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted() {
        const animal = this[this.$route.params.species][this.$route.params.id]
        this.animal = animal
      }
}

</script>
