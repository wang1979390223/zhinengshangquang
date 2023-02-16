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
      item: [800, 900, 850, 300, 700, 1000]
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
        title: {
          text: '行业消费',
          textStyle: {
            color: '#26f5f5',
            fontSize: 14
          },
          left: 'center',
          top: 50
        },
        color: ['#ffae00', '#52ffff', '#d676dc', '#f53f8c', '#52ff97', '#28b1ff'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          datas: ['餐饮', '电影', '健身', '游玩', '娱乐', '其他'],
          left: 'center',
          bottom: -5,
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
            name: '行业消费',
            type: 'pie',
            minAngle: 15,
            startAngle: 40,
            radius: ['45%', '65%'],
            center: ['50%', '38%'],
            itemStyle: {
              borderColor: '#143755',
              borderWidth: 2
            },
            data: [
              { value: this.item[0], name: '餐饮' },
              { value: this.item[1], name: '电影' },
              { value: this.item[2], name: '健身' },
              { value: this.item[3], name: '游玩' },
              { value: this.item[4], name: '娱乐' },
              { value: this.item[5], name: '其他' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
            label: {
              color: '#fff',
              formatter: '{d}%'
              // emphasis: mylabel
            },
            labelLine: {
              length: 3,
              length2: 1
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
  height: 160px;
  /* margin-top: -40px; */
  /* margin-left: 10px; */
}
</style>
