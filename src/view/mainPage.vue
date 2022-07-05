<template>
  <div class="hello">
    <header>
      <h1>echarts</h1>
      <div class="showTime">当前时间：2020年3月17-0时54分14秒</div>
    </header>
    <el-row class="mainbox">
      <el-col :span="7">
        <div class="column">
          <div class="panel line">
            <h2>折线图-人员变化</h2>
            <cc-limit-quantity/>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie">
            <h2>饼形图-年龄分布</h2>
             <cc-quantity-line/>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="10" class="stylecenter"> 
         <cc-table/>
      </el-col>
      <el-col :span="7">
        <div class="column">
          <div class="panel line">
            <h2>折线图-人员变化</h2>
            <cc-plate/>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie">
            <h2>饼形图-年龄分布</h2>
            <cc-shares/>
            <div class="panel-footer"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LimitQuantity from './LimitQuantity';
import quantityLine from './quantityLine';
import plate from './plate';
import table from './table';
import shares from './shares';
export default {
  name: "mainPage",
  components: {
			'cc-limit-quantity': LimitQuantity,
      'cc-quantity-line': quantityLine,
      'cc-table': table,
      'cc-plate': plate,
      'cc-shares': shares,
		
		},
  props: {
    msg: String,
  },
  methods: {
   
  },
};
</script>

<style scoped lang="less">
@import '../css/mainpage.less';

</style>
