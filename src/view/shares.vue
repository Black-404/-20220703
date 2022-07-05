<template>
  <div style="margin-top: 50px; display: flex; justify-content: center">
    <div>
      <div style="color:#fff;">前十</div>
      <div style="margin: 10px 50px;color:#FF3300;" v-for="item in testData" :key="item">
        <div>{{ item }}</div>
      </div>
    </div>
    <div>
      <div style="color:#fff;">热搜</div>
      <div style="margin: 10px 50px;color:#FF6600;" v-for="item in testData" :key="item">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    let testData = reactive([
      "京东制作", "京东", "京东", "京东制作", "京东制作", "京东制作", "京东制作", "京东制作", "京东制作", "京东制作",
      ]);
    return {
      testData,
    };
  },
};
</script>
<style scoped>
.ttt {
  margin: 5px 0;
}
</style>