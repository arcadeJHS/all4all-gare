<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <load-spinner v-if="isLoading" class="bg-white"></load-spinner>

        <p v-if="!!authError" class="text-center">{{authError}}</p>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import LoadSpinner from 'src/commons/components/LoadSpinner.vue';

export default {
  name: 'Auth',
  components: {
    LoadSpinner
  },
  data() {
    return {
      isLoading: false,
      authError: null
    };
  },
  created() {
    this.login();
  },
  methods: {
    async login() {
      this.isLoading = true;
      this.authError = null;
      try {
        await this.$store.dispatch('auth/login');
        this.$router.replace('/');
      } catch (error) {
        this.authError = error.message;
        console.error('%c %s', 'color:red; font-weight:bold;', `>>> Firebase authentication: ${error.message} <<<`);
      }
      this.isLoading = false;
    }
  }
};
</script>
