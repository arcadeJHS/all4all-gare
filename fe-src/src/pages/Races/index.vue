<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <load-spinner v-if="isLoading" class="bg-white"></load-spinner>

        <div v-if="!isLoading">
          <p class="text-body1 text-center text-blue-grey-9 q-mt-xs q-mb-lg q-px-md">
            Spingere i nostri atleti è facile: scegli una delle gare in programma per il <span class="text-bold text-red text-h6">2019</span> e registrati!
          </p>

          <q-card
            v-for="race in races" :key="race.id"
            class="text-white text-center q-mb-md q-mx-md races-Races__race-item"
            :style="{ backgroundColor: race.color}"
            @click="openSubscriptionDialog(race)">
            <q-card-section>
              <div class="row text-left">
                <div class="col-12">
                  <div :class="[isDesktop ? 'text-h3' : 'text-h4', 'text-bold', 'q-mb-xs']">{{dateLabel(race.date)}}</div>
                </div>
                <div class="col-12">
                  <div :class="[isDesktop ? 'text-h4' : 'text-h5', 'text-bold']">{{race.name}}</div>
                  <div>
                    <!--
                    <span class="text-subtitle1 races-Races__race-item__url" @click.stop="openRacePage(race.url)">{{race.url}}</span>
                    -->
                    <div :class="[isDesktop ? 'text-h5' : 'text-h6', 'text-bold']">{{race.location}}, {{timeLabel(race.date)}}</div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date, openURL } from 'quasar';
import LoadSpinner from 'src/commons/components/LoadSpinner.vue';
import SubscriptionDialog from './SubscriptionDialog.vue';

export default {
  name: 'Races',
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
    this.init();
  },
  computed: {
    races() {
      return this.$store.getters['races/races'];
    }
  },
  methods: {
    async init() {
      this.isLoading = true;
      await this.$store.dispatch('auth/login');
      await this.getRaces();
      this.isLoading = false;
    },
    async getRaces() {
      await this.$store.dispatch('races/get');
    },
    dateLabel(timestamp) {
      return date.formatDate(new Date(timestamp.toDate()), 'DD MMMM');
    },
    timeLabel(timestamp) {
      return date.formatDate(new Date(timestamp.toDate()), 'ore HH:mm');
    },
    openRacePage(url) {
      openURL(url);
    },
    openSubscriptionDialog(race) {
      this.$q.dialog({
        component: SubscriptionDialog,
        root: this.$root,
        race
      });
    }
  }
};
</script>

<style lang="stylus">
.races-Races__race-item {
  cursor: pointer;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  &:hover {
    -webkit-box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    -moz-box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
  }
}
.races-Races__race-item__url:hover {
  text-decoration: underline;
}
</style>
