<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <div class="fattipswrap" v-loading="tipsLoading">
      <div class="fattipsbox">
        {{ env }}
      </div>
    </div>

    <div class="right-menu">
      <div class="right-menu-item">
        <el-dropdown size="medium" :show-timeout="100" trigger="click">
          <div class="realname">
            {{ realname }}
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from '@/components/Hamburger';

export default {
  components: {
    Hamburger,
  },
  data() {
    return {
      env: process.env.VUE_APP_ENV,
      tipsLoading: false,
      tipsObj: {
        num1: 0,
        num2: 0,
        user: [],
      },
    };
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'realname',
    ]),
  },
  created() {
    this.alreadyChange();
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
    async logout() {
      const loading = this.$loading({ lock: true });
      await this.$store.dispatch('user/logout');
      loading.close();
      this.$router.push('/login');
    },

    // 已交付版本
    alreadyChange(v) {
    },

  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    flex: none;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .fattipswrap{
    flex: auto;
    display: flex;
    height: 46px;
    font-size: 14px;
    padding: 0 15px;
    .fattipsbox{
      flex: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .bg{
        min-width: 150px;
        flex: auto;
        align-self: stretch;
        display: flex;
        align-items: center;
        background: #f56c6c;
        padding: 0 15px;
        margin-right: 15px;
      }
    }
  }

  .right-menu {
    flex: none;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      cursor: pointer;
    }
  }
}
</style>
