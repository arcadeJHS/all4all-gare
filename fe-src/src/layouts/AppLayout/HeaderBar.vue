<template>
    <q-header reveal class="races-Header">
      <q-toolbar class="bg-white text-primary">
        <slot name="toolbarContentLeft">
          <!-- Hide drawer hamburger on desktop
          <q-btn v-if="!leftDrawerOpen" flat dense @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
            <q-icon firstName="menu" />
          </q-btn>
          -->
          <q-btn round flat dense @click="toggleLeftDrawer" aria-label="Menu">
            <q-icon name="menu" />
          </q-btn>
        </slot>

        <q-toolbar-title shrink>
          <slot name="toolbarTitle"></slot>
        </q-toolbar-title>

        <q-space />

        <slot name="toolbarContentRight">
          <img class="q-my-xs races-Header__logo" src="statics/logo-all4all.png">
        </slot>

      </q-toolbar>
    </q-header>
</template>

<script>
export default {
  name: 'HeaderBar',
  methods: {
    toggleLeftDrawer() {
      this.$root.$emit('toggleLeftDrawer');
    }
  }
};
</script>

<style lang="stylus">
img.races-Header__logo {
  max-height: 2.5em;
}
</style>
