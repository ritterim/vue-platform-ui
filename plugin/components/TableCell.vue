<template>
  <td :data-label="label">
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: 'pui-table-cell',
  props: {
    label: {
      type: String
    }
  }
};
</script>