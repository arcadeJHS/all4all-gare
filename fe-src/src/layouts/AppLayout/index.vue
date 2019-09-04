<template>
  <q-layout view="lHh Lpr lFf" class="races-AuthorizedLayout">

    <!--
      Default header-bar
      can be overwritten in each page using slot="toolbarContent"
    -->
    <header-bar></header-bar>

    <q-drawer v-model="leftDrawerOpen" content-class="bg-white text-primary" :width="220">
      <left-drawer></left-drawer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import HeaderBar from './HeaderBar.vue';
import LeftDrawer from './LeftDrawer.vue';

export default {
  name: 'AuthorizedLayout',
  components: {
    HeaderBar,
    LeftDrawer
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  mounted() {
    this.$root.$on('toggleLeftDrawer', this.toggleLeftDrawer);
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  }
};
</script>

<style lang="stylus">
.q-drawer {
  border-right: 1px solid $secondary;
}
</style>
