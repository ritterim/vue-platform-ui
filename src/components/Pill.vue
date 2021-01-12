<template>
  <div
    class="pill"
    :class="[
      pillClasses,
      (split == 'true') ? 'pill--split' : null ,
      statusClass,
      (dot == 'true') ? 'pill--circle-empty-dot' : null,
      (circle == 'true') ? 'pill--circle' : null,
      (circleEmpty == 'true') ? 'pill--circle-empty' : null,
      setCircleSize,
    ]"
  >
    <div v-if="label" class="pill__label" :class="labelClasses">
      {{ label }}
    </div>
    <template v-if="content">
      <div
        v-for="(item, index) in contentToArray"
        :key="index"
        class="pill__content"
        :class="contentClasses"
      >
        {{ item }}
      </div>
    </template>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'pill',
  props: {
    pillClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    split: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    label: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    labelClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    content: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    statusClass: {
      type: String,
      validator: function (value) {
        return ['negative', 'positive'].indexOf(value) !== -1;
      },
    },
    dot: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    circle: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    circleEmpty: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    circleSize: {
      type: String,
      validator: function (value) {
        return ['medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    setCircleSize() {
      let sizeClass = null;

      if (this.circleSize) {
        switch (this.circleSize) {
          case 'medium':
            sizeClass = 'pill--circle-medium';
            break;
          case 'large':
            sizeClass = 'pill--circle-large';
            break;
          default:
            sizeClass = null;
        }
      }

      return sizeClass;
    },
    contentToArray() {
      let contentArray = null;
      if (this.content) {
        contentArray = this.content.split(',').map((item) => item.trim());
      }
      return contentArray;
    },
  },
};
</script>