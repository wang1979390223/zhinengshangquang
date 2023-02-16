<template>
  <!-- 百度地图  -->
  <div id="bai-du-map">
    <!-- 技术支持和联系方式  -->
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
window._AMapSecurityConfig = {
  // 设置安全密钥
  securityJsCode: 'e885a2ddd3730e8c337b995f06f0230f'
};
export default {
  data() {
    return {
      map: null,
      mouseTool: null,
      overlays: [],
      auto: null,
      placeSearch: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: 'd9c229436ee335caafc4a7cd36da2283', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          'AMap.Scale',
          'AMap.ToolBar',
          'AMap.AutoComplete',
          'AMap.PlaceSearch',
          'AMap.ControlBar',
          'AMap.MouseTool'
        ] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then(AMap => {
          this.map = new AMap.Map('bai-du-map', {
            // mapStyle: "grey", // 自定义地图主题色
            viewMode: '2D', //  是否为3D地图模式
            zoom: 13, // 初始化地图级别
            center: [113.65553, 34.748764], // 中心点坐标  郑州
            mapStyle: 'amap://styles/blue',
            resizeEnable: true
          });
          this.mouseTool = new AMap.MouseTool(this.map);
          // 监听draw事件可获取画好的覆盖物
          this.mouseTool.on(
            'draw',
            function(e) {
              this.overlays.push(e.obj);
            }.bind(this)
          );
        })
        .catch(e => {
          console.log(e);
        });
    },
    draw(type) {
      switch (type) {
        case 'marker': {
          this.mouseTool.marker({
            // 同Marker的Option设置
          });
          break;
        }
        case 'polyline': {
          this.mouseTool.polyline({
            strokeColor: '#80d8ff'
            // 同Polyline的Option设置
          });
          break;
        }
        case 'polygon': {
          this.mouseTool.polygon({
            fillColor: '#00b0ff',
            strokeColor: '#80d8ff'
            // 同Polygon的Option设置
          });
          break;
        }
        case 'rectangle': {
          this.mouseTool.rectangle({
            fillColor: '#00b0ff',
            strokeColor: '#80d8ff'
            // 同Polygon的Option设置
          });
          break;
        }
        case 'circle': {
          this.mouseTool.circle({
            fillColor: '#00b0ff',
            strokeColor: '#80d8ff'
            // 同Circle的Option设置
          });
          break;
        }
      }
    }
  }
};
</script>
<style scoped>
#bai-du-map {
  width: 100%;
  height: 100%;
}
</style>
