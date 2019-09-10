<template>
  <q-list class="races-LeftDrawer">

    <q-item class="block text-center races-LeftDrawer__logo">
      <img src="statics/logo-all4all.png">
    </q-item>

    <q-item to="/races">
      <q-item-section avatar>
        <q-icon name="accessible_forward" size="2rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Iscrizione Eventi</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/runners">
      <q-item-section avatar>
        <q-icon name="directions_run" size="2rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Spingitori</q-item-label>
      </q-item-section>
    </q-item>

  </q-list>
</template>

<script>
export default {
  name: 'LeftDrawer'
};
</script>

<style lang="stylus">
.races-LeftDrawer .q-item.q-link {
  border-left: 4px solid transparent;
}
.races-LeftDrawer a.q-link.q-router-link--active {
  border-left: 4px solid $primary;
  background-color: $secondary;
}
.races-LeftDrawer__logo {
  background-color: white;
  img {
    width: 55%;
  }
}
</style>
