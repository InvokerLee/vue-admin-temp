<template>
  <div>
    <div>dashboard</div>

    <BaseTable
      autoHeight
      :loading="tableData.loading"
      :column="tableData.column"
      :data="tableData.data"
    >
    </BaseTable>
    <!--
      pagination
      :current-page.sync="params.page"
      :page-size="params.limit"
      :total="tableData.total"
      @size-change="pageSizeChange"
      @current-change="pageChange"
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        limit: 20,
        page: 1,
      },
      tableData: {
        loading: false,
        data: [
          { aa: 1, bb: 1 },
          { aa: 2, bb: 2 },
          { aa: 3, bb: 3 },
        ],
        column: [
          {
            width: 55,
            type: 'selection',
          },
          {
            width: 55,
            label: '序号',
            type: 'index',
          },
          {
            prop: 'aa',
            label: '厂商型号',
          },
          {
            prop: 'bb',
            label: '厂商/品牌',
            renderHeader: (h, scope) => {
              return <span class='font-20'>{ scope.column.label }</span>;
            },
            render: (h, scope) => {
              return <span class='font-20'>{ scope.row.bb }</span>;
            },
          },
        ],
        total: 100,
      },
    };
  },
  created() {
    // this.$dialog({
    //   props: {
    //     title: '修改预计发货时间',
    //     width: '480px',
    //   },
    //   component: updateExpectDate,
    //   componentProps: { defaultData },
    //   on: {
    //     success: () => {
    //       this.getList();
    //     },
    //   },
    // });
  },
  methods: {
    selectionChange(val) {
      // console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
