<template>
  <component :is="tag" class="v-imgfill-flex-box">
    <div class="v-imgfill-expansion" :style="{ 'padding-bottom': proportion * 100 + '%' }"></div><slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    flex: {
      required: true,
      type: Number,
      default: 1
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    proportion() {
      return this.flex
    }
  }
}
</script>
