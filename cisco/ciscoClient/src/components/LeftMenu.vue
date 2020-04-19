<template>
  <el-row id="left-menu-com" class="menu-page">
    <el-col>
      <h5 class='menu-title'>China Telecom</h5>
      <el-menu
        mode="vertical"
        text-color="#949494"
        class="el-menu-vertical-demo"
        active-text-color="#7989E8"
      >
        <router-link to="/">
          <el-menu-item index="0">
            <img class="img-class" src="../assets/p1.png"/>
            <span>网络拓扑</span>
          </el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="1">
            <img class="img-class" src="../assets/p2.png"/>
            <span>业务编排</span>
          </el-menu-item>
        </router-link>
        <router-link to="/SR">
          <el-menu-item index="2">
            <img class="img-class" src="../assets/p3.png"/>
            <span>SR-Policy管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="3">
            <img class="img-class" src="../assets/p4.png"/>
            <span>业务管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="4">
            <img class="img-class" src="../assets/p5.png"/>
            <span>资源管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="5">
            <img class="img-class" src="../assets/p6.png"/>
            <span>用户管理</span>
          </el-menu-item>
        </router-link>
      </el-menu>
      <div class="border-line"></div>
      <div class="document">
        <h6 class="document-title">DOCUMENTATION</h6>
        <ul class="document-txt">
          <router-link to="/">
            <img src="../assets/icon1.png"/>
            <span>Getting started</span>
          </router-link>
          <router-link to="/">
            <img src="../assets/icon2.png"/>
            <span>Foundation</span>
          </router-link>
          <router-link to="/">
            <img src="../assets/icon3.png"/>
            <span>Components</span>
          </router-link>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
    };
  }
};
</script>
<style>
#left-menu-com .el-menu-item:hover {
    outline: 0;
    background-color: rgba(103,115,229,0.15);
    color: #7989E8;
}
#left-menu-com .el-menu-item.is-active {
   background-color: rgba(103,115,229,0.15);
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.menu-page {
  width: 313px;
  top: 0;
  left: 0;
  min-height: 100%;
  z-index: 99;
}
.menu-title {
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: #66CCFF;
  line-height: 100px;
  text-align: center;
  font-weight: normal;
  font-size: 24px;
}
.el-menu-vertical-demo{
  .img-class{
    width: 25px;
    height: 25px;
  }
  .el-menu-item span{
    margin-left: 40px;
    font-size: 18px;
  }
  .el-menu-item:hover span{
    color: #7989E8;
  }
  .el-menu {
    border: none;
  }
}
.border-line{
  width: 240px;
  height: 1px;
  background-color:#E8E8E8;
  margin: 80px auto 0 auto;
}
a {
  text-decoration: none;
}
.document{
  padding-left: 30px;
  padding-top: 30px;
  color:#949494;
  font-size: 18px;
  .document-title{
    color:#CCCCCC;
    font-size: 18px;
    padding-bottom: 20px;
  }
  .document-txt{
    a{
      height: 35px;
      margin: 10px 0;
      display: flex;
      img{
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
      span{
        line-height: 35px;
        color: #949494
      }
    }
  }
}
</style>
