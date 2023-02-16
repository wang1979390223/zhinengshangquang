<template>
  <div class="xtlc">
    <div class="legend">
      <div v-for="(item, index) in legend" :key="`legend${index}`" class="legend-item">
        <div class="rect" :style="{ backgroundColor: item.color }"></div>
        <div class="name" :style="{ color: item.color }">{{ item.name }}</div>
      </div>
    </div>
    <!-- 数据 -->
    <div class="content-data">
      <div v-for="(item, index) in dataList" :key="`data${index}`" class="data-item">
        <div class="label">{{ item.name }}</div>
        <div class="label-icon"></div>
        <div class="data-line">
          <div class="line-box line-red">
            <div class="line" :style="{ width: `${item.numWidth}px` }"></div>
            <div class="num">{{ item.num }}</div>
          </div>
          <div class="line-box line-blue">
            <div class="line" :style="{ width: `${item.handleNumWidth}px` }"></div>
            <div class="num">{{ item.handleNum }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentXtlc',
  data() {
    return {
      legend: [
        { name: '警情状况', color: '#ff253f' },
        { name: '今日核查', color: '#24bfff' }
      ],
      dataList: []
    }
  },
  mounted() {
    const responseData = [
      { name: '部门1', num: 21, handleNum: 63 },
      { name: '部门1', num: 42, handleNum: 20 },
      { name: '部门1', num: 54, handleNum: 23 },
      { name: '部门1', num: 45, handleNum: 65 }
    ]

    this.dataList = this.setLineWidth(responseData)
  },
  methods: {
    setLineWidth(data) {
      let maxWidth = 100 // 默认按照100来计算，如果返回的数据有超过100的，则更改为最大值
      data.forEach(item => {
        if (item.num > maxWidth) maxWidth = item.num
        if (item.handleNum > maxWidth) maxWidth = item.handleNum
      })

      // 计算line宽度
      return data.map(item => {
        item.numWidth = (item.num / maxWidth) * 337
        item.handleNumWidth = (item.handleNum / maxWidth) * 337
        return item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.xtlc {
  width: 100%;
  height: 100%;
  .legend {
    text-align: center;
    .legend-item {
      display: inline-block;
      font-size: 14px;
      .rect {
        width: 12px;
        height: 6px;
        border-radius: 2px;
        display: inline-block;
        vertical-align: top;
        margin: 10px 5px 0 0;
      }
      .name {
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
      }
    }
  }
  .content-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-top: 7px;
    .data-item {
      height: 22px;
      display: flex;
      align-items: center;
      .label {
        width: 50px;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      .label-icon {
        width: 10px;
        height: 22px;
        background: url(../../assets/images/chart-icon.png) no-repeat left top / contain;
      }
      .data-line {
        flex-grow: 1;
        margin-left: 8px;
        height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .line-box {
          width: 100%;
          display: flex;
          align-items: center;
          .line {
            width: 337px;
            height: 8px;
            flex-shrink: 0;
            margin-right: 8px;
          }
          .num {
            height: 8px;
            line-height: 8px;
            font-size: 12px;
          }
          &.line-red {
            .line {
              background: url(../../assets/images/chart-line-1.png) no-repeat left top / 100% 8px;
            }
            .num {
              color: #ff465a;
            }
          }
          &.line-blue {
            .line {
              background: url(../../assets/images/chart-line-2.png) no-repeat left top / 100% 8px;
            }
            .num {
              color: #0ee6fb;
            }
          }
        }
      }
    }
  }
}
</style>
