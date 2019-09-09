<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <load-spinner v-if="isLoading" class="bg-white"></load-spinner>

        <div v-if="!isLoading" class="q-pa-md">
          RUNNERS ISCRITTI A: {{raceId}}

          <p v-for="runner in runners" :key="runner.id">
            <pre>{{runner}}</pre>
          </p>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import LoadSpinner from 'src/commons/components/LoadSpinner.vue';

export default {
  name: 'RunnersList',
  components: {
    LoadSpinner
  },
  props: ['raceId'],
  data() {
    return {
      isLoading: false,
      runners: []
    };
  },
  mounted() {
    this.getRunners();
  },
  methods: {
    async getRunners() {
      this.isLoading = true;
      this.runners = await this.$store.dispatch('runners/getRunnersByRace', this.raceId);
      this.isLoading = false;
    }
  }
};
</script>
