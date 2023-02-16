<!-- 资源调取 -->
<template>
  <div class="container">
    <Map />
    <div class="nav">
      <ul>
        <li>
          <div class="box">
            <p class="num">80</p>
            <p class="name">治理指数</p>
          </div>
        </li>
        <li>
          <div class="box">
            <p class="num">80</p>
            <p class="name">效能指数</p>
          </div>
        </li>
        <li>
          <div class="box">
            <p class="num">80</p>
            <p class="name">协同指数</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div class="but">
      <ul>
        <li>
          <div class="img">
            <div class="border">
              <img src="../../../assets/images/center/a.png" alt="" srcset="" />
            </div>
          </div>
          <div class="name">消防</div>
        </li>
        <li>
          <div class="img">
            <div class="border">
              <img src="../../../assets/images/center/2.png" alt="" srcset="" />
            </div>
          </div>
          <div class="name">治安</div>
        </li>
        <li>
          <div class="img">
            <div class="border">
              <img src="../../../assets/images/center/3.png" alt="" srcset="" />
            </div>
          </div>
          <div class="name">环境</div>
        </li>
        <li>
          <div class="img">
            <div class="border">
              <img src="../../../assets/images/center/4.png" alt="" srcset="" />
            </div>
          </div>
          <div class="name">食品</div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import Map from '@/components/mapw.vue';
export default {
  components: {
    Map
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .nav {
    position: absolute;
    top: 20px;
    left: 50px;
    ul {
      margin-left: 90px;
      li {
        width: 159px;
        height: 150px;
        float: left;
        margin-right: 58px;
        background: url(../../../assets/images/center/zlzd.png) no-repeat left
          top / 100% 100%;
        text-align: center;
        &:nth-child(2) {
          background: url(../../../assets/images/center/sqssd.png) no-repeat
            left top / 100% 100%;
        }
        &:nth-child(3) {
          background: url(../../../assets/images/center/sqhyd.png) no-repeat
            left top / 100% 100%;
        }
        .box {
          .num {
            font-size: 48px;
            color: #fff;
            margin-top: 30px;
            z-index: -1;
            font-weight: bold;
          }
          .name {
            font-size: 20px;
            color: #fff;
            margin-top: 20px;
            z-index: -1;
          }
        }
      }
    }
  }
  .but {
    width: 636px;
    height: 89px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: url(../../../assets/images/center/btn_bg.png) no-repeat left top /
      100% 100%;
    ul {
      position: absolute;
      top: 19px;
      left: 80px;
      margin: auto;
      li {
        width: 134px;
        float: left;
        .img {
          width: 52px;
          height: 52px;
          float: left;
          .border {
            width: 40px;
            height: 40px;
            margin-top: 6px;
            border-radius: 50%;
            border: 2px solid #298dd4;
            display: flex;
            background: #0e4b8a;
            box-shadow: 4px 0px 40px #298dd4;
            img {
              margin: auto;
            }
          }
        }
        .name {
          float: left;
          font-size: 22px;
          color: #fff;
          line-height: 52px;
        }
      }
    }
  }
}
</style>
