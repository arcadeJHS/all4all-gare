<template>
  <q-dialog
    ref="SubscriptionDialog"
    persistent
    square
    :maximized="!isDesktop"
    :full-height="isDesktop"
    :seamless="false"
    :transition-show="!isDesktop ? 'slide-left' : ''"
    :transition-hide="!isDesktop ? 'slide-right' : ''"
    content-class="races-SubscriptionDialog"
    @hide="onHide">
    <q-card v-if="race" :class="['column', 'no-wrap', 'bg-white', 'text-primary', isDesktop ? 'is-desktop' : '']">
      <q-toolbar class="races-SubscriptionDialog__toolbar">
        <q-btn round dense flat icon="close" color="grey" @click="onCancel"></q-btn>
        <q-space />
        <q-btn round dense flat icon="check" color="primary" @click="onOK" :disabled="!isValidProfile"></q-btn>
      </q-toolbar>

      <q-card-section class="q-pt-none">

        <p class="text-h6 text-center text-white q-pa-xs races-SubscriptionDialog__race-name" :style="{ backgroundColor: race.color}">{{race.name}}</p>

        <q-input v-model="runner.firstName" label="Nome" class="mandatory-field" />
        <q-input v-model="runner.lastName" label="Cognome" class="mandatory-field" />
        <q-select
          class="mandatory-field"
          v-model="runner.yearOfBirth"
          :options="yearOptions"
          label="Anno di nascita">
        </q-select>
        <!--
        <q-select
          class="mandatory-field"
          v-model="runner.sex"
          label="Sesso"
          :options="sexOptions"
          emit-value>
        </q-select>
        <q-input v-model="runner.nationality" label="Nazionalità" />
        -->
        <q-select
          flat
          v-model="runner.shirtSize"
          label="Taglia maglietta"
          :options="shirtSizeOptions"
          emit-value>
        </q-select>

      </q-card-section>

      <q-card-actions align="right" class="bg-white races-SubscriptionDialog__actions" style="margin-top: auto;">
        <q-btn flat label="Cancel" color="grey" @click="onCancel" />
        <q-btn flat label="Conferma" color="primary" @click="onOK" :disabled="!isValidProfile" :loading="isSaving" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'SubscriptionDialog',
  props: ['race'],
  data() {
    return {
      isDesktop: this.$q.platform.is.desktop,
      isSaving: false,
      sexOptions: [
        {
          label: 'M',
          value: 'M'
        },
        {
          label: 'F',
          value: 'F'
        }
      ],
      shirtSizeOptions: [
        {
          label: 'XS',
          value: 'XS'
        },
        {
          label: 'S',
          value: 'S'
        },
        {
          label: 'M',
          value: 'M'
        },
        {
          label: 'L',
          value: 'L'
        },
        {
          label: 'XL',
          value: 'XL'
        }
      ],
      yearOptions: this.setYearOptions(),
      runner: {
        race: this.race.id,
        firstName: null,
        lastName: null,
        yearOfBirth: null,
        sex: null,
        shirtSize: null,
        nationality: null
      }
    };
  },
  computed: {
    isValidProfile() {
      return !!this.runner.firstName && !!this.runner.lastName && !!this.runner.yearOfBirth;
    }
  },
  mounted() {
    const currentRunner = this.$store.getters['runners/currentRunner'];
    if (currentRunner) {
      this.runner = { ...currentRunner };
    }
  },
  methods: {
    setYearOptions() {
      const currentYear = (new Date()).getFullYear();
      const min = currentYear - 70;
      const max = currentYear - 14;
      const years = [];
      for (let year = min; year <= max; year += 1) {
        years.push(year);
      }
      return years;
    },
    show() {
      this.$refs.SubscriptionDialog.show();
    },
    hide() {
      this.$refs.SubscriptionDialog.hide();
    },
    onCancel() {
      this.$emit('cancel');
      this.hide();
    },
    async onOK() {
      this.isSaving = true;
      await this.saveProfile();
      this.isSaving = false;
      this.confirmSuccess();
      this.$emit('ok');
      this.hide();
    },
    onHide() {
      this.$emit('hide');
    },
    async saveProfile() {
      const runnerId = `${this.runner.race}_${this.runner.firstName.toLowerCase()}_${this.runner.lastName.toLowerCase()}_${this.runner.yearOfBirth}`;
      await this.$store.dispatch('runners/saveRunner', { runnerId, runner: this.runner });
    },
    confirmSuccess() {
      this.$q.notify({
        icon: 'accessible_forward',
        color: 'green',
        html: true,
        message: 'Grazie!',
        position: 'center',
        classes: 'races-SubscriptionDialog__thankyou'
      });
    }
  }
};
</script>

<style lang="stylus">
.races-SubscriptionDialog .q-card.is-desktop {
  width: 40vw;
  min-width: 40vw;
  max-width: 40vw;
}
.races-SubscriptionDialog__race-name {
  border-radius: 6px;
}
.q-notification.races-SubscriptionDialog__thankyou * {
  font-size: 3rem;
}
</style>
