<template>
  <table class="table" :class="[{'table--no-hover': hoverOff}, {unresponsive: unresponsive}]">
    <thead>
      <tr>
        <th v-for="header in headers" :v-id="header" :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'pui-table',
  props: {
    unresponsive: {
      type: Boolean
    },
    hoverOff: {
      type: Boolean
    },
    headers: {
      type: Array,
      required: true
    }
  }
};
</script>