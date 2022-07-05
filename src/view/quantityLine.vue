
<template>
  <div>
    <div
      id="quantityChart"
      class="imgChart"
    ></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";

export default {
  setup() {
    onMounted(() => {
      //需要获取到element,所以是onMounted的Hook
      let myChart = echarts.init(document.getElementById("quantityChart"));
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: "Stacked Line",
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads"],
          padding:[20,0,0,0], 
          textStyle:{
            color:'rgb(255,255,255,0.9)'
          }
        },
        grid: {      
          left: "3%",
          right: "4%",
          bottom: "-1%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "6","7", "8", "9", "10", "11","12", "13", "14", "15", "16", "17", "18", "19","20","21","22"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
         
        ],
      });
      window.onresize = function () {
        //自适应大小
        myChart.resize();
      };
    });
  },
};
</script>

<style scoped lang="less">
.imgChart {
  height: 20rem; 
  width: 32rem;
  top: 24px;
}
</style>