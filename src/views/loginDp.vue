<template>
  <div class="login">
    <div class="input">
      <!-- 二维码登录 -->
      <div v-if="erweimafalse">
        <div class="zzdtitle">
          请使用 <span class="zzdpolitical">浙政钉</span> APP扫码登录
        </div>
        <img
          class="ewmzhanghaodenglu"
          src="../image/zhanghaodenglu.png"
          alt=""
          @click="switchSignin"
        >
        <div class="erweimasao">
          <img class="ewmQRcode" src="../image/LargeDCode.png" alt="">
        </div>
      </div>
      <!-- 账号登录 -->
      <div v-else>
        <img
          class="erweimaimg"
          src="../image/ewm.png"
          alt=""
          @click="ewmimgclick"
        >
        <el-form ref="form" :model="form" label-width="80px">
          <div class="bj">
            <el-form-item>
              <el-input
                v-model="form.accountNumber"
                placeholder="账号"
              ></el-input>
              <img class="zhanghaoimg" src="../image/zhanghao.png" alt="">
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="form.password"
                type="password"
                class="password"
                placeholder="密码"
              ></el-input>
              <img class="zhanghaoimg" src="../image/mima.png" alt="">
            </el-form-item>
            <el-form-item>
              <div class="yzmtitleinput">
                <el-input
                  v-model="form.VerificationCode"
                  class="yanzhengma"
                  placeholder="验证码"
                ></el-input>
                <div class="yzmdiv">5WQT</div>
              </div>
              <img class="zhanghaoimg" src="../image/yzm.png" alt="">
            </el-form-item>
            <el-form-item>
              <el-checkbox-group v-model="form.jizhu">
                <el-checkbox label="记住密码" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button class="buttonqueding" @click="onSubmit">
                登录
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        accountNumber: 'wuchengzhifaju',
        password: 'WUCHENGZHIFAJU',
        VerificationCode: '5wqt',
        jizhu: ''
      },

      // 二维码的显示隐藏
      erweimafalse: false
    };
  },
  methods: {
    // 登录按钮
    onSubmit() {
      if (
        this.form.accountNumber === 'wuchengzhifaju' &&
        this.form.password === 'WUCHENGZHIFAJU' &&
        this.form.VerificationCode === '5wqt'
      ) {
        this.$router.push('/souye');
      } else {
        this.$message({ message: '请输入正确的账号或者密码', center: true });
      }
    },
    // 点击切换扫码登录
    ewmimgclick() {
      this.erweimafalse = true;
    },
    // 点击切换账号登录
    switchSignin() {
      this.erweimafalse = false;
    }
  }
};
</script>

<style>
.login {
  width: 1920px;
  height: 1080px;
  background: url(../image/loginging.gif) no-repeat left top / 100% 100%;
}
.input {
  position: absolute;
  top: 220px;
  left: 478px;
  width: 949px;
  height: 640px;
}
.zzdtitle {
  position: absolute;
  bottom: 149px;
  left: 302px;
  color: white;
  font-size: 30px;
}
.zzdpolitical {
  color: #43a0ff;
}
.erweimasao {
  width: 312px;
  height: 312px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -156px;
  margin-top: -196px;
  background: url(../image/QRcode.png) no-repeat left top / 100% 100%;
}
.ewmQRcode {
  width: 312px;
  height: 312px;
}
.ewmzhanghaodenglu {
  width: 129px;
  height: 125px;
  position: absolute;
  right: 75px;
  top: 65px;
}
.yzmtitleinput {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.zhanghaoimg {
  position: absolute;
  top: 142px;
  left: 0;
  z-index: 201;
}
.yzmdiv {
  position: absolute;
  top: 149px;
  right: 0px;
  width: 112.9px;
  height: 48.8px;
  background: #0b2e63;
  color: #50d1ff;
  text-align: center;
  line-height: 48.8px;
  font-size: 20px;
}
.el-checkbox {
  margin-top: 167px;
}
.el-checkbox__inner {
  /* width: 21px;
  height: 21px; */
  background: #0b2e63;
  border: 1px solid #0395d5;
  scale: 1.3;
}
.el-checkbox__label {
  color: #48c0eb;
}
.buttonqueding {
  width: 446px;
  border: none;
  height: 85px;
  color: #091a54;
  margin-top: -100px;
  margin-left: -15px;
  background: url(../image/queding.png) no-repeat left top / 100% 100%;
}
.el-button:focus,
.el-button:hover {
  width: 446px;
  border: none;
  height: 85px;
  color: #091a54;
  margin-top: -100px;
  margin-left: -15px;
  background: url(../image/queding.png) no-repeat left top / 100% 100%;
}
.erweimaimg {
  width: 129px;
  height: 125px;
  position: absolute;
  right: 75px;
  top: 65px;
}
.password {
  z-index: 3;
}
.bj {
  margin-left: 190px;
  margin-right: 264px;
  position: relative;
}
.el-input__inner {
  text-indent: 50px;
  position: absolute;
  top: 124px;
  height: 48.8px;
  background-color: #0b2e63;
  border: 1px solid #0395d5;
  color: white;
}
.yanzhengma {
  margin-top: 25px;
  width: 273.9px;
  position: relative;
  z-index: 2;
}
.pos {
  position: relative;
  z-index: 2;
}
</style>
