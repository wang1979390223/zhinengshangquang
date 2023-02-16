<template>
  <div id="chartPie" class="pie-wrap"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';
export default {
  data() {
    return {
      chartPie: null,
      item: [200, 400, 350, 400, 800, 900]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPieChart();
    });
  },
  methods: {
    drawPieChart() {
      let mytextStyle = {
        color: '#fff',
        fontSize: 18
      };
      let mylabel = {
        show: true,
        // position: "right",
        offset: [10, 20],
        formatter: '{b} : {c} ({d}%)',
        textStyle: mytextStyle
      };
      this.chartPie = echarts.init(
        document.getElementById('chartPie'),
        'macarons'
      );
      this.chartPie.setOption({
        // title: {
        //   text: "Pie Chart",
        //   subtext: "纯属虚构",
        //   x: "center",
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          datas: ['餐饮', '电影', '健身', '餐饮', '电影', '电影'],
          left: 'center',
          top: 'bottom',
          orient: 'horizontal',
          icon: 'circle',
          itemHeight: 10,
          selectedMode: false,
          textStyle: {
            color: '#FFFFFF'
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '30%'],
            center: ['40%', '38%'],
            itemStyle: {
              borderColor: '#FFFFFF',
              borderWidth: 2
            },
            data: [
              { value: this.item[0], name: '30%' },
              { value: this.item[1], name: '23%' },
              { value: this.item[2], name: '6%' },
              { value: this.item[3], name: '17%' },
              { value: this.item[4], name: '16%' },
              { value: this.item[5], name: '24%' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
            label: {
              emphasis: mylabel
            }
          }
        ]
      });
    }
  }
};
</script>
<style>
.pie-wrap {
  width: 40%;
  height: 150px;
  /* margin-top: -40px; */
  /* margin-left: 10px; */
}
</style>
