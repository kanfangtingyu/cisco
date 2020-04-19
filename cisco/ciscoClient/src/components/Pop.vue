<template>
  <div class="pop">
    <el-dialog
      width="560px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
    >
        <el-form  label-position="left" label-width='93px' :model="form">
            <el-form-item label="策略名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Color">
                <el-input v-model="form.color"></el-input>
            </el-form-item>
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="头端设备">
                <el-select class='spe-select' v-model="form.head" placeholder="请选择">
                        <el-option
                        v-for="item in list"
                        :key="item.value"
                        :label="item.value"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="尾端设备">
                <el-select class='spe-select' v-model="form.end" placeholder="请选择">
                        <el-option
                        v-for="item in list"
                        :key="item.value"
                        :label="item.value"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="尾端IP地址">
                    <el-input v-model="form.endIP"></el-input>
                </el-form-item>
            </el-form>
            <el-form-item class='switch-input' label="Binding SID">
                <el-switch v-model="SID">
                </el-switch>
                <el-input v-model="form.adAtt" v-if='SID'></el-input>
            </el-form-item>
            <el-form-item class='switch-input' label="Bandwidth">
                <el-switch v-model="Bandwidth">
                </el-switch>
                <el-input  v-model="form.adType" v-if='Bandwidth'></el-input>
            </el-form-item>
            <el-button type="primary" @click="addsr">添加</el-button>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "pop",
  data(){
      return{
          SID:true,
          Bandwidth:true,
          list:[
              {
                  value:'HK-HK-MA-S1.CTG',
                  label:'选项1'
              },{
                  value:'R2',
                  label:'选项2'
              }
          ],
      }
  },
  props: {
    dialog: Object,
    form: Object
  },
  created() {
    console.log(this.form)
  },
  methods: {
    addsr() {
    // 提交表格数据
      this.axios.post('/api/srs/add',this.form).then(()=>{
          this.$message({
            message: "保存成功！",
            type: "success"
        });
        this.dialog.show = false;
        this.$emit("update");
      }).catch((error)=>{
          console.log(error)
      })
    },
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    .pop{
        .el-form-item__label{
            color:#000000
        }
        .el-input__inner{
            width:220px;
            border-top:0px;
            border-left:0px;
            border-right:0px;
            border-radius:0;
            padding-left:0;
            border-bottom: 1px solid #666666;
        }
        .demo-form-inline{
            .el-input,.el-input__inner{
                width:165px;
            }
        }
        .spe-select{
            .el-input__inner{
                border-bottom: 0;
            }
        }
        .switch-input{
            .el-input{
                width:222px;
                margin-left:20px;
            }
            .el-input__inner{
                width:222px;
            }
        }
    }
</style>

