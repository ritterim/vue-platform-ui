<template>
  <tr>
    <td v-for="cell in cells" :v-id="cell.data" :key="cell.data" :data-label="cell.label">
      {{ cell.data }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'pui-table-row',
  props: {
    cells: {
      type: Array,
      required: true
    }
  }
};
</script>