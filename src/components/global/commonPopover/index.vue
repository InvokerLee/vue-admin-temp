<style lang="scss" scoped>

</style>

<template>
  <div v-if="txt">
    <el-popover
      :placement="position"
      width="400"
      :trigger="trigger"
      :open-delay="openDelay"
    >
      <div style="max-height: 300px; padding-right: 10px; overflow-y: auto;">
        <div v-if="isPre" v-html="txtHover || txt" style="white-space: pre-wrap;"></div>
        <div v-else v-html="txtHover || txt"></div>
      </div>
      <!-- :title="trigger === 'click' ? (txtHover || txt) : ''" -->
      <div
        slot="reference"
        :class="txtColor"
        class="singleLine"
        @click="textClickFn"
      >{{ txt }}</div>
    </el-popover>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'top',
    },
    trigger: {
      type: String,
      default: 'click',
    },
    txt: {
      type: String,
      default: '',
    },
    txtHover: {
      type: String,
      default: '',
    },
    isPre: {
      type: Boolean,
      default: false,
    },
    txtColor: {
      type: String,
      default: 'bluelink',
    },
    openDelay: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    textClickFn() {
      this.$emit('textClick');
    },
  },
};
</script>
