<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <load-spinner v-if="isLoading" class="bg-white"></load-spinner>

        <div v-if="!isLoading" class="q-pa-md">
          <h6 class="q-mt-none q-mb-md">{{raceInfo.name}} ({{dateLabel(raceInfo.date)}})</h6>

          <div class="row">
            <q-markup-table dense flat bordered>
              <thead></thead>
              <tbody>
                <tr v-for="(runner, index) in runners" :key="runner.id">
                  <td>{{index+1}}</td>
                  <td>{{runner.firstName}}</td>
                  <td>{{runner.lastName}}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { dateLabel } from 'src/commons/services/Utils';
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
  computed: {
    raceInfo() {
      return this.$store.getters['races/raceById'](this.raceId);
    }
  },
  methods: {
    async getRunners() {
      this.isLoading = true;
      this.runners = await this.$store.dispatch('runners/getRunnersByRace', this.raceId);
      this.isLoading = false;
    },
    dateLabel
  }
};
</script>
