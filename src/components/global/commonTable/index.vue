<style lang="scss" scoped>

</style>

<template>
  <div class="commonTable">
    <el-table
      ref="elTableRef"
      :data="tableData"
      v-loading="loading"
      v-adaptive-height="isListPage ? {bottomOffset: bottomOffset} : {nobind: true}"
      :height="height"
      :max-height="maxHeight"
      @selection-change="selectionChange"
      :row-class-name="rowClassName"
      :cell-class-name="cellClassName"
      :span-method="spanMethod"
      @sort-change="sortChange"
      :row-key="rowKey"
      :default-expand-all="defaultExpandAll"
      :indent="32"
      border
      size="medium"
    >
      <el-table-column
        v-if="haveCheck"
        type="selection"
        :selectable="selectable"
        align="center"
        width="55"
      />
      <template v-for="item in tableConfigList">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :align="item.align || 'center'"
          :width="item.width || ''"
          :show-overflow-tooltip="item.showOverflowTip"
          :key="item.prop"
          :sortable="item.sort || false"
          :fixed="item.fixed || false"
        >
          <template slot-scope="scope">
            <slot :name="item.prop" :scope="scope">
              <span v-if="!item.html">{{ scope.row[item.prop] }}</span>
              <span v-else v-html="scope.row[item.prop]"></span>
            </slot>
          </template>
          <!-- 自定义头部  添加 _head_ 前缀-->
          <template slot="header" slot-scope="scope">
            <slot :name="'_head_' + item.prop" :scope="{label: item.label, row: scope.row}">{{ item.label }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'commonTable',
  props: {
    // 是否在列表页面中使用
    isListPage: {
      type: Boolean,
      default: true,
    },
    // 是否有勾选框
    haveCheck: {
      type: Boolean,
      default: true,
    },
    // 距离底部px
    bottomOffset: {
      type: Number,
      default: 45,
    },
    // 加载loading
    loading: {
      type: Boolean,
      default: false,
    },
    // 表格数据
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    // 表格配置   [{prop: '', label: '', width: ''},...]
    tableConfigList: {
      type: Array,
      default() {
        return [];
      },
    },
    // 表格高度
    height: {
      type: [String, Number],
      default: '120px',
    },
    // 表格最大高度
    maxHeight: {
      type: [String, Number],
      default: 'auto',
    },
    // 表格行样式
    rowClassName: {
      type: Function,
      default() {
        return () => {};
      },
    },
    cellClassName: {
      type: Function,
      default() {
        return () => {};
      },
    },
    // 表格行是否可以勾选
    selectable: {
      type: Function,
      default() {
        return () => {};
      },
    },
    // 单元格合并
    spanMethod: {
      type: Function,
      default() {
        return () => {};
      },
    },
    rowKey: {
      type: String,
      default: '',
    },
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectionChange(arr) {
      this.$emit('selectChange', arr);
    },
    // 排序
    sortChange() {
      this.$emit('sortChange', ...arguments);
    },
  },
};
</script>
