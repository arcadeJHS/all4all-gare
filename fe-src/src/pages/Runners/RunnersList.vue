<template>
  <q-layout>
    <q-page-container>
      <q-page>

        RUNNERS ISCRITTI: {{id}}

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'RunnersList',
  props: ['id']
};
</script>
