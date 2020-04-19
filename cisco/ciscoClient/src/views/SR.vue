<template>
  <div class="sr-page">
    <div class="search-title">
      <el-button-group>
        <el-button size="small" @click='addData' type="primary">创建</el-button>
        <el-button size="small" type="primary">编辑</el-button>
        <el-button size="small" @click='delAll' type="primary">删除</el-button>
      </el-button-group>
      <el-input
        class="search-input"
        placeholder="search"
        prefix-icon="el-icon-search"
        v-model = 'searchData'
        @keyup.enter.native = 'search'
      >
      </el-input>
    </div>
    <el-table 
      :data="filterData" 
      stripe 
      class="sr-table"
      style="width: 100%;" 
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        min-width="2%">
      </el-table-column>
      <el-table-column prop="name" label="SR策略名称" sortable min-width="9%"> </el-table-column>
      <el-table-column prop="time" label="SR策略时效" sortable min-width="10%"> </el-table-column>
      <el-table-column prop="color" label="SR策略Color" sortable min-width="10%"> </el-table-column>
      <el-table-column prop="head" label="头端设备" sortable min-width="9%"> </el-table-column>
      <el-table-column prop="end" label="尾端设备" sortable min-width="9%"> </el-table-column>
      <el-table-column prop="endIP" label="尾端IP地址" sortable min-width="10%"> </el-table-column>
      <el-table-column prop="adType" label="路径类型" sortable min-width="9%"> </el-table-column>
      <el-table-column prop="adAtt" label="路径属性" sortable min-width="18%"> </el-table-column>
      <el-table-column label="备份路径" sortable min-width="7%">
        <template slot-scope="scope">
          <span v-if='scope.row.otherAd'>启用</span>
          <span v-else>未启用</span>
        </template>
      </el-table-column>
      <el-table-column label="路径约束" sortable min-width="7%">
        <template slot-scope="scope">
          <span v-if='scope.row.adTf'>启用</span>
          <span v-else>未启用</span>
        </template>
      </el-table-column>
    </el-table>
    <POP :dialog="dialog" :form="form" @update="getsr"></POP>
  </div>
</template>

<script>
import POP from "../components/Pop";
export default {
  data() {
    return {
      tableData: [], // 存储初始数据
      filterData: [], // 存储筛选数据
      multipleSelection:[], //多选的数据
      searchData:'',
      delarr:[],
      dialog:{
        show: false,
        title: ""
      },
      form:{
        name:'',
        time:'',
        color:'',
        head:'',
        end:'',
        endIP:'',
        adType:'',
        adAtt:'',
        otherAd: false,
        adTf: false
      }
    };
  },
  components:{
    POP
  },
  created() {
    this.getsr()
    this.search()
  },
  watch: {
    tableData:{
      handler() {
        this.filterData = this.tableData.slice(0)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 获取数据
    getsr() {
      this.axios.get('/api/srs').then((response)=>{
          this.tableData = response.data.slice(0)
      }).catch((error)=>{
          console.log(error)
      })
    },
    handleSelectionChange(val){
      this.multipleSelection = val;
    },
    // 批量删除
    delAll() {
      let length = this.multipleSelection.length;
      for (let i = 0; i < length; i++) {
        this.deletesr(this.multipleSelection[i]._id)
        this.getsr();
      }
      this.multipleSelection = []
    },
    async deletesr(a){
      await this.axios.delete(`/api/srs/delete/${a}`)
        .then(
          this.getsr()
        )
        .catch((error)=>{
          console.log(error)
        });
    },
    search(){
      this.filterData = this.tableData.filter((item)=>{
        return item.allString.indexOf(this.searchData) >= 0
      })
    },
    // 弹框
    addData() {
      this.dialog = {
        show: true,
        title: "添加数据"
      };
      this.form = {
        name:'',
        time:'',
        color:'',
        head:'',
        end:'',
        endIP:'',
        adType:'',
        adAtt:'',
        otherAd: false,
        adTf: false
      };
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.sr-page {
  min-width:1000px;
  .el-button--primary {
    color: #000;
    background-color: #E4E4E4;
    border-color: #E4E4E4;
  }
  .el-button--primary:hover{
    background-color: #66CCFF;
  }
  .el-input--prefix .el-input__inner {
    width: 500px;
    height: 24px;
    border-radius: 12px;
  }
  .el-input__icon {
    line-height: 25px;
  }
  .el-table-column--selection .cell{
    padding-left: 14px;
  }
  .el-table td{
    padding-top:6px;
    padding-bottom:6px;
  }
  .cell{
    font-size:14px;
  }
  .el-table th{
    padding: 0;
    background-color: #66CCFF;
    color: #FFFFFF;
    height: 24px;
  }
  .el-table .sort-caret.ascending{
    border-bottom-color: #666666
  }
  .el-table .sort-caret.descending{
    border-top-color: #666666
  }
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.sr-page {
  padding: 60px 40px 0 40px;
  .search-title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-input {
      width: 500px;
      height: 24px;
    }
  }
  
}
.sr-table{
  padding-top: 10px;
}
</style>
