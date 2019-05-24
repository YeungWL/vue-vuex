<template>
  <el-aside width="200px" class="e-aside">
    <!-- <div style="height:80px;background:#fff;padding:8px 10px;box-sizing: border-box;">
      <div style="height:100%;background: #ccc;"></div>
    </div> -->
    <el-menu :default-active="activeIndex"
             :default-openeds="openeds"
             @select="handleSelectMenu">
      <el-submenu :index="item.key"
                  v-for="(item, index) in menuList"
                  v-if="item.display"
                  :key="index">
        <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
        <el-menu-item-group>
          <el-menu-item v-for="(child, key) in item.children"
                        :key="key"
                        v-if="!child.children && child.display"
                        @click="clickMenu(child.path)"
                        :index="child.key">{{child.title}}</el-menu-item>
        </el-menu-item-group>
        <el-submenu v-for="(child, key) in item.children"
                    :key="key"
                    v-if="child.children && child.display"
                    :index="child.key">
          <template slot="title">{{child.title}}</template>
          <el-menu-item v-for="(childItem, key) in child.children"
                        :key="key"
                        v-if="childItem.display"
                        :index="childItem.key">{{childItem.title}}</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { menuList } from '@/assets/js/menu'

export default {
  name: 'e-aside',
  data () {
    return {
      activeIndex: '1-1',
      openeds: ['1']
    }
  },
  methods: {
    // 菜单激活函数
    handleSelectMenu (key, keyPath) {
      this.activeIndex = key
      let opened = []
      opened.push(keyPath[0], keyPath[1])
      // console.log(key, keyPath, opened)
      this.openeds = opened
      // switch (key) {
      //   case '1-1': this.$router.push({ path: '/' }); break
      // }
    },
    clickMenu (path) {
      console.log(path)
    }
  },
  created () {
    this.menuList = menuList
  }
}
</script>

<style lang="scss" scoped>
.e-aside {
  background-color: rgb(238, 241, 246);
  /deep/ .el-menu-item-group__title {
    display: none;
  }
}
</style>
