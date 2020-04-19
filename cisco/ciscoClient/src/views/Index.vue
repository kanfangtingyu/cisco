<template>
  <div class="index">
    <LeftMenu class='left-menu'></LeftMenu>
    <div class="right-container">
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from "../components/LeftMenu";
import Header from "../components/TopHeader"
export default {
    name: "index",
    components: {
        LeftMenu,
        Header
    }
};
</script>
<style scoped>
.index {
    width: 100%;
    height: 100%;
    display: flex;
}
.left-menu{
    width: 313px;
    height: 100%;
    border-right: 2px solid rgba(0, 0, 0, 0.2);
}
.right-container {
    flex:1;
    min-width: 600px;
    overflow-x: auto;
    height: 100%;
}
</style>