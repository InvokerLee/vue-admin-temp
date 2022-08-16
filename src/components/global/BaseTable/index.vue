<template>
  <div>
    <el-table
      ref="elTable"
      border
      size="mini"
      v-bind="$attrs"
      v-on="$listeners"
      v-auto-height="autoHeight && { bottomOffset: pagination ? 64 : 20 }"
      :height="autoHeight ? 100 : height"
      :data="data"
    >
      <aColumn
        v-bind="$attrs"
        v-for="(item, index) in column"
        :key="index"
        :column="item"
      >
      </aColumn>
    </el-table>
    <el-pagination
      v-if="pagination && data.length"
      v-bind="$attrs"
      v-on="$listeners"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[20, 50, 100, 200]"
      :style="{ 'margin-top': '16px', 'text-align': 'center' }"
    >
    </el-pagination>
  </div>
</template>

<script>
import aColumn from './aColumn';
export default {
  components: {
    aColumn,
  },
  props: {
    column: {
      type: Array,
      default() { return []; },
    },
    data: {
      type: Array,
      default() { return []; },
    },
    height: {
      type: [String, Number],
      default: 'auto',
    },
    autoHeight: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { };
  },
  computed: {
    dataLength() {
      return this.data.length;
    },
  },
  methods: {},
};

</script>
