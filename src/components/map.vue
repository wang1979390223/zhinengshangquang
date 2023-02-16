<!-- <template>
  <div ref="map" class="map"></div>
</template>

<script>
import treeIcon from '@/assets/images/tree.png'

export default {
  name: 'Map',
  data() {
    return {
    }
  },
  mounted() {
    // 模拟区域
    const area = [
      // 第一个区域
      {
        polygon: [
          [119.559454, 29.069879],
          [119.558654, 29.070128],
          [119.557592, 29.067811],
          [119.558391, 29.067568]
        ],
        marker: [119.558611, 29.069115],
        text: {
          content: '采伐区域1',
          position: [119.558596, 29.068900]
        }
      },
      // 第二个区域
      {
        polygon: [
          [119.558601, 29.070137],
          [119.558204, 29.070282],
          [119.557399, 29.069321],
          [119.558134, 29.069119]
        ],
        marker: [119.55815, 29.069912],
        text: {
          content: '采伐区域2',
          position: [119.55815, 29.069703]
        }
      },
      // 第三个区域
      {
        polygon: [
          [119.557367, 29.069274],
          [119.558096, 29.069073],
          [119.557485, 29.067633],
          [119.556664, 29.067849],
          [119.556771, 29.068247],
          [119.556197, 29.068393]
        ],
        marker: [119.557324, 29.068852],
        text: {
          content: '采伐区域3',
          position: [119.557329, 29.068604]
        }
      }
    ]

    const map = this.mapInit()
    // 渲染区域
    area.forEach(item => {
      this.addPolygon(map, item)
    })
  },
  methods: {
    mapInit() {
      const $map = new AMap.Map(this.$refs.map, {
        zoom: 18,
        center: [119.558, 29.069096],
        layers: [
          new AMap.TileLayer.Satellite(),
          new AMap.TileLayer.RoadNet()
        ]
      });

      // $map.on('click', e => {
      //   console.log(e)
      // })
      return $map
    },
    addPolygon(map, data) {
      let polygon = new AMap.Polygon({
        path: data.polygon,
        fillColor: '#0beffe',
        fillOpacity: 0.2,
        strokeOpacity: 1,
        strokeColor: '#0beffe',
        strokeWeight: 4
      });
      let marker = new AMap.Marker({
        icon: treeIcon,
        position: data.marker,
        offset: new AMap.Pixel(-16, -16)
      });
      let text = new AMap.Text({
        text: data.text.content,
        anchor: 'center', // 设置文本标记锚点
        style: {
          'padding': '3px 8px',
          'background-color': 'rgba(0,0,0,0.7)',
          'text-align': 'center',
          'font-size': '16px',
          'color': '#fff',
          'border': 'none'
        },
        position: data.text.position
      })
      map.add([polygon, marker, text]);
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style> -->
