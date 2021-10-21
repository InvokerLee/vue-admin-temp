<style lang="scss" scoped>
.commonPagination{
  .pagination {
    text-align: center;
    margin: 8px 0 0;
  }
}
</style>

<template>
  <div class="commonPagination">
    <!-- 分页 -->
    <el-pagination
      v-if="tableData.length"
      layout="total, sizes, prev, pager, next, jumper"
      class="pagination"
      :current-page.sync="params.page"
      :page-size.sync="params.limit"
      :total="total"
      :page-sizes="pageSizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'commonPagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    params: {
      type: Object,
      default() {
        return {};
      },
    },
    // 表格数据
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    pageSizes: {
      type: Array,
      default() {
        return [20, 50, 100, 200];
      },
    },
  },
  methods: {
    // 每页个数改变时
    handleSizeChange() {
      this.params.page = 1;
      this.$emit('sizeChange');
    },

    // 页数改变时
    handleCurrentChange() {
      this.$emit('sizeChange');
    },
  },
};
</script>
