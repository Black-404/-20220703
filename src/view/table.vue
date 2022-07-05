<template>
    <el-table :data="tableData" style="width: 95%" height="24rem" :header-row-style="{height:'50px'}" :cell-style="{height:'20px',background:'#003366',color:'white'}" :header-cell-style="{background:'#006699',color:'white'}" :row-style="{height:'70px'}" >
      <el-table-column fixed prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="state" label="State" />
      <el-table-column prop="city" label="City" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column prop="zip" label="Zip" />
      
    </el-table>
 
</template>
<script>
import { onMounted,mounted } from "vue";
export default {
  setup() {
     onMounted(() => {
        
     })
     const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Ange",
        address: "No. 189,",
        zip: "CA 90036",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angel",
        address: "No. 189, ",
        zip: "CA 90036",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angel",
        address: "No. 189, ",
        zip: "CA 90036",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Ang",
        address: "No. 189, ",
        zip: "CA 90036",
      },
      {
        date: "2016-05-08",
        name: "Tom",
        state: "California",
        city: "Los Ange",
        address: "No. 189,",
        zip: "CA 90036",
      },
     
    ];
     return {
    
      tableData,
     
    }
    //  return {
    //    tableData
    //  }
   
  },
};
</script>
