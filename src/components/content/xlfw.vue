<!-- <template>
  <div class="xlfw">
    <div ref="tagBall" class="module-content tagBall-3d">
      <a v-for="(item, index) in dataSource" :key="index" ref="tag" class="tag-3d" :data-index="index">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentXlfu',
  data() {
    return {
      isMove: true,
      dataSource: []
    }
  },
  mounted() {
    // 模拟数据
    const data = [
      { name: '冬季取暖措施' },
      { name: '垃圾成堆环境污染' },
      { name: '长时间阴雨天气' },
      { name: '大坝水位吃紧' },
      { name: '老龄化' },
      { name: '电梯经常坏' },
      { name: '管理混乱' },
      { name: '冬季寒流来袭' },
      { name: '冬季取暖措施' },
      { name: '流动人口众多' },
      { name: '老龄化社区' }
    ]
    const { offsetWidth, offsetHeight } = this.$refs.tagBall;
    this.dataSource = data
    this.$nextTick(function() {
      this.wordcloudinit((offsetHeight / 2) - 10, offsetWidth / 2);
    })
  },
  methods: {
    wordcloudinit(e, t) {
      window.cancelAnimationFrame(this.AnimationFrameId)
      let d = this.$refs.tag, a = this.$refs.tagBall, that = this, RADIUS = e, fallLength = t, tags = [], angleX = Math.PI / t * .3, angleY = Math.PI / t * .3, CX = a.offsetWidth / 2, CY = a.offsetHeight / 2; // EX = a.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft, EY = a.offsetTop + document.body.scrollTop + document.documentElement.scrollTop
      // if ('addEventListener' in window) {
      //   a.addEventListener('mousemove', function(e) {
      //     var t = e.clientX - EX - CX, a = e.clientY - EY - CY;
      //     angleY = 1e-5 * t,
      //     angleX = 1e-5 * a
      //   })
      // } else {
      //   a.attachEvent('onmousemove', function(e) {
      //     var t = e.clientX - EX - CX, a = e.clientY - EY - CY;
      //     angleY = 1e-4 * t,
      //     angleX = 1e-4 * a
      //   });
      // }
      d.forEach(item => {
        item.addEventListener('mouseover', () => {
          // that.titleIndex = event.target.dataset.index;
          // that.top = event.layerY;
          // that.left = event.layerX - 230;
          that.isMove = false
        });
        // item.addEventListener('mousemove', event => {
        //   that.top = event.layerY;
        //   that.left = event.layerX - 230;
        // })
        item.addEventListener('mouseout', () => {
          that.isMove = true
        });
      })
      var p = function(e, t, a, o) {
        this.ele = e,
        this.x = t,
        this.y = a,
        this.z = o
      };
      p.prototype = {
        move: function() {
          var e = fallLength / (fallLength - this.z), t = (this.z + RADIUS) / (2 * RADIUS), a = 'translate(' + (this.x + CX - this.ele.offsetWidth / 2 + 'px') + ', ' + (this.y + CY - this.ele.offsetHeight / 2 + 'px') + ') scale(' + e + ')';
          this.ele.style.opacity = t + .5,
          this.ele.style.zIndex = parseInt(100 * e),
          this.ele.style.transform = a,
          this.ele.style.webkitTransform = a
        }
      },
      function() {
        for (var e = ['rgba(235,255,116,1)', 'rgba(254,182,255,1)', 'rgba(89,255,218,1)', 'rgba(160,244,69,1)', 'rgba(120,182,255,1)', 'rgba(255,142,155,1)'], t = 0; t < d.length; t++) {
          var a, o = (2 * (t + 1) - 1) / d.length - 1, i = (a = Math.acos(o)) * Math.sqrt(d.length * Math.PI), r = RADIUS * Math.sin(a) * Math.cos(i), n = RADIUS * Math.sin(a) * Math.sin(i), l = RADIUS * Math.cos(a), s = new p(d[t], r, n, l), c = Math.floor(Math.random() * e.length);
          d[t].style.color = e[c],
          tags.push(s),
          s.move();
        }
      }(),
      function e() {
        if (that.isMove) {
          var o, i, r, n;
          o = Math.cos(angleX),
          i = Math.sin(angleX),
          tags.forEach(function(e) {
            var t = e.y * o - e.z * i, a = e.z * o + e.y * i;
            e.y = t,
            e.z = a
          }),
          r = Math.cos(angleY),
          n = Math.sin(angleY),
          tags.forEach(function(e) {
            var t = e.x * r - e.z * n, a = e.z * r + e.x * n;
            e.x = t,
            e.z = a
          }),
          tags.forEach(function(e) {
            e.move()
          });
        }
        that.AnimationFrameId = requestAnimationFrame(e)
      }()
    }
  }
}
</script>

<style lang="scss" scoped>
.xlfw {
  width: 100%;
  height: 100%;
  .tagBall-3d{
    position: relative;
    overflow: hidden;
    height: 100%;
    .tag-3d{
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      color: #000;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
      font-family: "Microsoft YaHei", "微软雅黑";
      font-weight: bold;
    }
  }
}
</style> -->
