<template>
  <table class="table">
    <thead>
      <tr>
        <th v-repeart="headers">
          {}
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  name: 'pui-table',
  props: {
    unresponsive: {
      type: Boolean
    },
    headers: {
      type: Array
    }
  }
};
</script>