
<template>
  <div>
    <div
      id="customerChart"
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
      let myChart = echarts.init(document.getElementById("customerChart"));
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: "Stacked Line",
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["涨停", "跌停", "连板"],
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
          data: ["1", "2", "6", "7", "8","9", "10", "13", "14", "15","16", "17", "20"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "涨停",
            type: "line",
            // stack: "Total",
            data: [81, 87, 84, 60, 60, 41, 93,68,61,56,65,64,92],
           itemStyle : {  
	                 normal : {  
	                     color:'#CC0033',  
	                     lineStyle:{  
	                         color:'#FF0000	'  
	                     }  
	                 }  
	             },  


          },
          {
            name: "跌停",
            type: "line",
            // stack: "Total",
            data: [9, 7, 10, 10, 12, 7, 8,1,14,9,4,0,7],
             itemStyle : {  
	                 normal : {  
	                     color:'#33CC66',  
	                     lineStyle:{  
	                         color:'#33CC00	'  
	                     }  
	                 }  
	             },  
          },
          {
            name: "连板",
            type: "line",
            // stack: "Total",
            data: [17, 24, 21, 16, 14, 12, 12,16,15,14,12,9,23],
             itemStyle : {  
	                 normal : {  
	                     color:'#CC33CC',  
	                     lineStyle:{  
	                         color:'#CC00FF'  
	                     }  
	                 }  
	             },  
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