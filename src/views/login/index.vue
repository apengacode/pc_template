<template>
  <div ref="vantaRef" class="page">
    <div class="login-box">
      <div class="login-form">
        <div class="logo">Login</div>
        <div class="form">
          <el-form :model="form" :rules="rules" ref="form" label-width="" class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input v-model="form.username" placeholder="Username" size="small"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" type="password" placeholder="Password" size="small"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn">
          <div>
            <el-checkbox v-model="remember">Remember me</el-checkbox>
          </div>
          <div>
            <div class="login-btn" @click="login">Login</div>
          </div>
        </div>
      </div>
      <div class="login-register">
        <div class="register-header">Register</div>
        <div class="free">Free Account</div>
        <div class="author">
          author:
          <div>qiurongjun</div>
          <div>duchunpeng</div>
          <div>shiyong</div>
          <div>dongbingnan</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as THREE from 'three'
// import CLOUDS from 'vanta/src/vanta.clouds'
export default {
  name: 'Home',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: 'Please input Username',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please input Password',
            trigger: 'change'
          }
        ]
      },
      remember: false
    }
  },
  mounted() {
    // this.vantaEffect = CLOUDS({
    //   el: this.$refs.vantaRef,
    //   THREE: THREE
    // })
    // const userform = localStorage.getItem('userform')
    // if (userform) {
    //   this.remember = true
    //   this.form.username = 'admin'
    //   this.form.password = '123@abc'
    // }
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.form.username === 'admin' && this.form.password === '123@abc') {
            if (this.remember) {
              if (!localStorage.getItem('userform')) {
                localStorage.setItem('userform', JSON.stringify({ username: 'admin', password: '123@abc' }))
              }
            }
            this.$router.push('/layout')
          } else {
            this.$message.error('Please input realname && password')
          }
        } else {
          this.$message.error('Please input required')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url('../../assets/images/logo/bg.png');
}
.login-box {
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-90%);
  background-color: #464646;
  width: 550px;
  height: 250px;
  display: flex;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  .login-form {
    width: 330px;
    border-right: 1px solid #000;
    .logo {
      color: #fff;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .form {
      padding: 0 20px;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      .login-btn {
        width: 100px;
        height: 30px;
        background-color: #e07d88;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
        cursor: pointer;
      }
    }
  }
  .login-register {
    width: 200px;
    box-sizing: border-box;
    padding: 0 20px;
    .register-header {
      color: #fff;
      font-size: 24px;
      margin-bottom: 10px;
    }
    .free {
      color: #948289;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .author {
      color: #999;
      div {
        margin: 5px 10px;
      }
    }
  }
}
</style>
