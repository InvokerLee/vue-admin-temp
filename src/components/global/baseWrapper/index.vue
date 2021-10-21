<template>
  <el-row class="base-wrapper" type="flex">
    <div class="wrapper-head" v-if="showHead">
      <div class="w100">
        <slot name="head" />
      </div>
    </div>
    <div :class="{'wrapper-content': true, 'has-head': showHead}">
      <slot />
    </div>
  </el-row>
</template>

<script>
export default {
  computed: {
    showHead() {
      return this.$slots.head;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .wrapper-head {
    position: absolute;
    background: #fff;
    z-index: 10;
    left: 0;
    right: 0;
    height: 58px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.1);
  }
  .wrapper-content {
    padding: 15px 15px 5px;
    height: 100%;
    flex: 1 1 auto;
    overflow: auto;
    &.has-head {
      padding-top: 58px;
    }
  }
}
</style>
