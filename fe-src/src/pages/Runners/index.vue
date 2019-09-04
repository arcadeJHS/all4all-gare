<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <load-spinner v-if="isLoading" class="bg-white"></load-spinner>

        <div v-if="!isLoading" class="q-pa-md">
          <p v-for="race in races" :key="race.id">
            <router-link class="races-RouterLink" @click.native="$event.stopImmediatePropagation()" :to="`/runners/${race.id}`">{{dateLabel(race.date)}} - {{race.name}}</router-link>
          </p>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date, openURL } from 'quasar';
import LoadSpinner from 'src/commons/components/LoadSpinner.vue';

export default {
  name: 'Runners',
  components: {
    LoadSpinner
  },
  data() {
    return {
      isDesktop: this.$q.platform.is.desktop,
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
    dateLabel(timestamp) {
      return date.formatDate(new Date(timestamp.toDate()), 'DD MMMM');
    },
    openRacePage(url) {
      openURL(url);
    }
  }
};
</script>
