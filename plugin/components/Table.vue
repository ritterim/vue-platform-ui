<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" :v-id="header" :key="header">
          {{header}}
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