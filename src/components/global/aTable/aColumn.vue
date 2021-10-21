<template>
  <el-table-column
    v-bind="$attrs"
    v-on="$listeners"
    :type="column.type"
    :index="column.index"
    :prop="column.prop"
    :label="column.label"
    :width="column.width"
    :min-width="column.minWidth"
    :fixed="column.fixed"
    :render-header="column.renderHeader"
    :sortable="column.sortable || false"
    :sort-method="column.sortMethod"
    :sort-by="column.sortBy"
    :sort-orders="column.sortOrders"
    :resizable="column.resizable || true"
    :show-overflow-tooltip="column.showOverflowTooltip || false"
    :align="column.align || 'center'"
    :header-align="column.headerAlign || column.align || 'center'"
    :class-name="column.className"
    :selectable="column.selectable"
    :filters="column.filters"
    :filter-placement="column.filterPlacement"
    :filter-multiple="column.filterMultiple"
    :filter-method="column.filterMethod"
    :filtered-value="column.filteredValue"
  >
    >

    <template
      slot="header"
      slot-scope="scope"
    >
      <aRender
        v-if="column.renderHeader"
        :scope="scope"
        :render="column.renderHeader"
      >
      </aRender>
      <span v-else>{{ scope.column.label }}</span>
    </template>

    <template slot-scope="scope">
      <aRender
        :scope="scope"
        :render="column.render"
      >
      </aRender>
    </template>
  </el-table-column>
</template>

<script>
import aRender from './aRender';
import forced from './forced.js';

export default {
  name: 'aColumn',
  components: {
    aRender,
  },
  props: {
    column: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    column: {
      handler() {
        this.setColumn();
      },
      immediate: true,
    },
  },
  methods: {
    setColumn() {
      // 三个选项： index/selection/expand
      if (this.column.type) {
        this.column.renderHeader = forced[this.column.type].renderHeader;
        this.column.render = this.column.render || forced[this.column.type].renderCell;
      }
      if (!this.column.render) {
        this.column.render = (h, scope) => {
          return <span>{ scope.row[scope.column.property] }</span>;
        };
      }
    },
  },
};
</script>
