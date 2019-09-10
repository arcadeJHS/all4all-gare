<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <load-spinner v-if="isLoading" class="bg-white"></load-spinner>

        <div v-if="!isLoading" class="q-pa-md">
          <q-markup-table dense flat bordered>
            <thead></thead>
            <tbody>
              <tr v-for="race in races" :key="race.id" @click="openRacePage(`/runners/${race.id}`)" class="races-Runners__race">
                <td>{{dateLabel(race.date)}} - {{race.name}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { dateLabel } from 'src/commons/services/Utils';
import LoadSpinner from 'src/commons/components/LoadSpinner.vue';

export default {
  name: 'Runners',
  components: {
    LoadSpinner
  },
  data() {
    return {
      isLoading: false
    };
  },
  mounted() {
    this.getRaces();
  },
  computed: {
    races() {
      return this.$store.getters['races/races'];
    }
  },
  methods: {
    async getRaces() {
      this.isLoading = true;
      await this.$store.dispatch('races/get');
      this.isLoading = false;
    },
    dateLabel,
    openRacePage(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<style>
.races-Runners__race {
  cursor: pointer;
}
</style>
