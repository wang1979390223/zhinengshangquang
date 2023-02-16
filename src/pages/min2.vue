<template>
  <div style="height: 150%; width: 300px">
    <!-- <div :id="id" style="height: 150%; width: 100%"></div> -->
    <div class="bg"></div>
    <div class="tuli">
      <ul>
        <li>
          <div class="title"><span></span> 餐饮（500万）</div>
        </li>
        <li>
          <div class="title"><span></span> 餐饮（500万）</div>
        </li>
        <li>
          <div class="title"><span></span> 餐饮（500万）</div>
        </li>
        <li>
          <div class="title"><span></span> 餐饮（500万）</div>
        </li>

        <li>
          <div class="title"><span></span> 餐饮（500万）</div>
        </li>
        <li>
          <div class="title"><span></span> 餐饮（500万）</div>
        </li>
        <li>
          <div class="title"><span></span> 餐饮（500万）</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import highcharts from 'highcharts';
import { fontChart } from '@/utils/echartPxToRem';
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    dataList: {
      type: Array,
      default: () => [
        {
          name: '餐饮',
          y: 20,
          h: 0,
          bfb: 0
        },
        {
          name: '健康',
          y: 4,
          h: 0,
          bfb: 0
        },
        {
          name: '消费',
          y: 4,
          h: 0,
          bfb: 0
        },
        {
          name: '电影',
          y: 6,
          h: 0,
          bfb: 0
        },
        {
          name: '购物',
          y: 4,
          h: 0,
          bfb: 0
        },
        {
          name: '活动',
          y: 10,
          h: 0,
          bfb: 0
        }
      ]
    }
  },
  watch: {
    dataList() {
      this.$nextTick(() => {
        this.initOption();
      });
    }
  },
  mounted() {
    // this.$nextTick(() => {
    this.initOption();
    // });
    window.addEventListener('resize', this.initOption);
  },
  destroyed() {
    window.removeEventListener('resize', this.initOption);
  },
  methods: {
    initOption() {
      let quantity = 0; // 总数
      this.dataList.forEach(item => {
        quantity += item.y;
      });
      this.dataList.forEach(item => {
        item.bfb = parseInt((item.y / quantity) * 100);
        item.h = item.bfb * 1.5 >= 1000 ? 1000 : item.bfb * 1.5;
        // item.h = parseInt(0.86 * item.bfb); // 最高高度60，根据比例渲染高度
        // console.log(this.dataList, "dataList----->>>");
      });
      // 修改3d饼图绘制过程
      var each = highcharts.each,
        round = Math.round,
        cos = Math.cos,
        sin = Math.sin,
        deg2rad = Math.deg2rad;
      highcharts.wrap(
        highcharts.seriesTypes.pie.prototype,
        'translate',
        function(proceed) {
          proceed.apply(this, [].slice.call(arguments, 1));
          // Do not do this if the chart is not 3D
          if (!this.chart.is3d()) {
            return;
          }
          var series = this,
            chart = series.chart,
            options = chart.options,
            seriesOptions = series.options,
            depth = seriesOptions.depth || 0,
            options3d = options.chart.options3d,
            alpha = options3d.alpha,
            beta = options3d.beta,
            z = seriesOptions.stacking
              ? (seriesOptions.stack || 0) * depth
              : series._i * depth;
          z += depth / 2;
          if (seriesOptions.grouping !== false) {
            z = 0;
          }
          each(series.data, function(point) {
            var shapeArgs = point.shapeArgs,
              angle;
            point.shapeType = 'arc3d';
            var ran = point.options.h;
            shapeArgs.z = z;
            shapeArgs.depth = depth * 0.75 + ran;
            shapeArgs.alpha = alpha;
            shapeArgs.beta = beta;
            shapeArgs.center = series.center;
            shapeArgs.ran = ran;
            angle = (shapeArgs.end + shapeArgs.start) / 2;
            point.slicedTranslation = {
              translateX: round(
                cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              ),
              translateY: round(
                sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              )
            };
          });
        }
      );
      (function(H) {
        H.wrap(highcharts.SVGRenderer.prototype, 'arc3dPath', function(
          proceed
        ) {
          // Run original proceed method
          var ret = proceed.apply(this, [].slice.call(arguments, 1));
          ret.zTop = (ret.zOut + 0.5) / 100;
          return ret;
        });
      })(highcharts);
      highcharts.chart(this.id, {
        chart: {
          animation: false,
          backgroundColor: 'none',
          type: 'pie', // 饼图
          margin: [0, 0, 0, 0],
          options3d: {
            enabled: true, // 使用3d功能
            alpha: 60, // 延y轴向内的倾斜角度
            beta: 0
          },
          events: {
            load: function() {
              var each = highcharts.each,
                points = this.series[0].points;
              each(points, function(p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran
                });
              });
            }
          }
        },
        legend: {
          enabled: false, // 关闭图例
          align: 'right', // 水平方向位置
          verticalAlign: 'top', // 垂直方向位置
          layout: 'vertical',
          x: fontChart(20),
          // y: fontChart(30),
          symbolWidth: fontChart(50),
          symbolHeight: fontChart(20),
          symbolRadius: '0%', // 修改成圆
          itemMarginBottom: fontChart(15),
          useHTML: true,
          // labelFormat: '{name}&nbsp;&nbsp;&nbsp;&nbsp;{y}',
          labelFormatter: function() {
            return (
              '<div style="width: 4rem;display: inline-block">' +
              this.name +
              '&nbsp;&nbsp;</div><div style="color: #00d7da;display:inline-block">' +
              '</div>'
            );
          },
          itemStyle: {
            color: '#f4f4f6',
            fontSize: fontChart(12)
          }
        },
        title: {
          // enabled: false,
          text: ''
        },
        subtitle: {
          text: ''
        },
        plotOptions: {
          pie: {
            allowPointSelect: false, // 禁用点击
            cursor: 'pointer',
            depth: fontChart(15),
            showInLegend: true,
            size: '75%', // 外圈直径大小
            innerSize: fontChart(136), // 内圈直径大小
            center: ['62%', '28%'],
            colors: [
              'rgb(37, 152, 158,.9)',
              'rgb(233, 64, 166,.9)',
              'rgb(244, 158, 93,.9)',
              'rgb(245, 184, 77,.9)',
              'rgb(138, 205, 241,.9)',
              'rgb(4, 63, 142,.9)'
            ],
            dataLabels: {
              useHTML: true,
              enabled: false, // 是否显示饼图的线形tip
              distance: 5,
              borderColor: '#007acc',
              align: 'center',
              // verticalAlign: 'top',
              position: 'right',
              format: '{point.bfb}%',
              // formatter: (point,b) => {
              //   console.log(point,'ponit-->>')
              //   console.log(b,'ponit-->>')
              // },
              color: '#ffffff',
              style: {
                textOutline: 'none',
                fontSize: fontChart(13)
              }
            }
          }
        },
        credits: {
          enabled: false // 禁用版权信息
        },
        series: [
          {
            type: 'pie',
            name: '数量',
            data: this.dataList
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.bg {
  position: absolute;
  left: 33px;
  bottom: 40px;
  width: 300px;
  height: 124px;
  background: url(../assets/images/pie-dz.png) no-repeat left bottom / 100% 100%;
}
.tuli {
  color: #fff;
  position: absolute;
  top: 250px;
  left: 355px;
  font-size: 10px;
  transform: scale(0.83333);
  transform-origin: 0 0;
  li {
    margin-bottom: 12px;
    &:nth-child(2) span {
      background-color: #194fa2;
    }
    &:nth-child(3) span {
      background-color: #8ecef1;
    }
    &:nth-child(4) span {
      background-color: #f5b84d;
    }
    &:nth-child(5) span {
      background-color: #f49e5d;
    }
    &:nth-child(6) span {
      background-color: #e940a6;
    }
    &:nth-child(7) span {
      background-color: #26f5f5;
    }
    span {
      margin-bottom: -2px;
      margin-right: 17px;
      display: inline-block;
      width: 14px;
      height: 14px;
      background-color: #219395;
    }
  }
}
</style>
