/**
 * <el-table
 *  recordScrollPosition
 *  ...
 * >
 */

export default {
  activated() {
    setTimeout(() => {
      const nodeList = this.$el.querySelectorAll('[recordScrollPosition]>.el-table__body-wrapper');
      if (!nodeList.length) return;
      for (let i = 0; i < nodeList.length; i += 1) {
        const ele = nodeList[i];
        // 兼容IE写法，ie不支持dataset属性
        if (ele.dataset) {
          ele.scrollTop = ele.dataset.scrollTop || 0;
        } else {
          ele.scrollTop = ele.getAttribute('scrollTop') || 0;
        }
      }
    }, 0);
  },
  beforeRouteLeave(to, from, next) {
    const nodeList = this.$el.querySelectorAll('[recordScrollPosition]>.el-table__body-wrapper');
    if (nodeList.length) {
      for (let i = 0; i < nodeList.length; i += 1) {
        const ele = nodeList[i];
        if (ele.dataset) {
          ele.dataset.scrollTop = ele.scrollTop;
        } else {
          ele.setAttribute('scrollTop', ele.scrollTop);
        }
      }
    }
    next();
  },
};
