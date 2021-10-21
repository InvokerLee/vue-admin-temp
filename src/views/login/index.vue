<template>
  <div class="login-container">
    <el-form
      size="medium"
      ref="accountForm"
      class="login-form"
      :model="loginForm"
      :rules="rules"
    >
      <div class="title-container">
        <h3 class="title">
          立创商城外贸ERP
        </h3>
      </div>
      <!-- 用户名输入框 -->
      <el-form-item prop="username">
        <el-input
          placeholder="账户名"
          v-model.trim="loginForm.username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="密码"
          v-model="loginForm.password"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="showDialog">绑定网卡用户选项</el-button>
      </el-form-item>
      <el-button
        class="login-btn"
        size="medium"
        type="primary"
        :loading="loading"
        @click.native.prevent="handleLogin"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { encode } from './base64.js';

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        mac_address: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '至少输入六位', trigger: 'blur' },
        ],
      },
      loading: false,
      redirect: undefined,
      macAddressDialog: {
        show: false,
        isPluginInstalled: false,
        macAddressList: [],
      },
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    showDialog() {
      this.macAddressDialog.show = true;
    },
    closeDialogMacAddress() {
      this.macAddressDialog.show = false;
    },
    handleLogin() {
      this.$refs.accountForm.validate(valid => {
        if (!valid) return;
        if (this.macAddressDialog.isPluginInstalled) { // mac地址验证
          this.loginForm.mac_address = this.macAddressDialog.macAddressList;
        }
        this.login();
      });
    },
    login() {
      this.loading = true;
      this.$store.dispatch('user/login', {
        ...this.loginForm,
        username: encode(this.loginForm.username),
        password: encode(this.loginForm.password),
        isBase64: 1,
      })
        .then(() => {
          this.$router.push({ path: this.redirect || '/' });
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: #fff;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
    .login-btn {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
