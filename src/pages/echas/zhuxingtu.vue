<template>
  <div class="">
    <div id="maiss" style="height: 250px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    // 立体柱状图
    threeDimensionalLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("maiss"));
      var option = {
        color: ["#184683FF"],
        title: {
          text: "一体化合规管理",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#25ECEDFF",
          },
        },
        legend: {
          x: "right", //可设定图例在左、右、居中
          y: "center", //可设定图例在上、下、居中
          data: ["1", "2"],
          textStyle: {
            color: "#fff", // 图例文字颜色
          },
        },
        grid: {
          left: "6%",
          right: "4%",
          bottom: "3%",
          top: "10%",
          // containLabel: true
        },
        tooltip: {},

        xAxis3D: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6"],
          axisLine: {
            lineStyle: {
              color: "#3B596BFF", //边框颜色
              width: 2,
            },
          },
        },
        yAxis3D: {
          type: "category",
          data: [""],
          axisLine: {
            lineStyle: {
              color: "#3B596BFF",
              width: 2,
            },
          },
        },
        zAxis3D: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#3B596BFF",
              width: 2,
            },
          },
        },
        grid3D: {
          boxWidth: 260,
          boxDepth: 20,
          axisPointer: {
            show: false,
          },
          light: {
            main: {
              intensity: 1.2,
            },
            ambient: {
              intensity: 0.3,
            },
          },
          viewControl: {
            alpha: 0, //控制场景平移旋转
            beta: 0,
            minAlpha: 0,
            maxAlpha: 0,
            minBeta: 0,
            maxBeta: 0,
          },
        },
        series: [
          {
            type: "bar3D",
            name: "1",
            barSize: 15,
            data: [
              [0, 0, 1200 + 1200 + 1800],
              [2, 0, 10000],
              [4, 0, 6000],
              [1, 0, 12000],
              [3, 0, 60000],
              [5, 0, 12000],
            ],
            stack: "stack",
            shading: "lambert",
            emphasis: {
              label: {
                show: true,
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  created() {},
  mounted() {
    this.threeDimensionalLine();
  },
  components: {},
};
</script>
<style scoped>
</style>