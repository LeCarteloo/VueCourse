<template>
  <div>
    <b-table striped hover :items="cats">
      <template #cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/cats/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
/* eslint-disable */
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
};
</script>
