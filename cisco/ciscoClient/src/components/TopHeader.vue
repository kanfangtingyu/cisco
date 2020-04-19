<template>
    <header class="head-nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user-img">
            <img src="../assets/avater.png" alt="">
            <span>Username</span>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            title: ''
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    created(){
        this.getBreadcrumb()
    },
    methods:{
        getBreadcrumb() {
            let matched = this.$route
            if(matched.name === 'SR'){
                this.title = 'SR-Policy管理'
            }else{
                this.title = '其他页面'
            }
        }
    }
}
</script>

<style>
.head-nav .el-breadcrumb {
    font-size: 18px;
}
.head-nav .el-breadcrumb__inner.is-link{
    font-weight: normal;
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.head-nav {
  width: 100%;
  height: 100px;
  min-width: 1000px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-breadcrumb{
      margin-left: 70px;
  }
  .user-img{
      display: flex;
      align-items: center;
      img{
          margin-right: 10px;
      }
      margin-right: 70px;
      font-size: 20px;
      font-weight: 400;
      color: #000000;
  }
}
</style>