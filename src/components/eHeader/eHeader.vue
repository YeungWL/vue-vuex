<template>
  <el-header class="e-header">
    <div class="head-right">
      <el-dropdown class="m-dropdown" @command="langCommand" trigger="click">
        <span class="dropdown-link">
          <span>{{label}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, index) in options"
                            :command="item"
                            :key="index">{{item.label}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="m-dropdown" @command="handleCommand" trigger="click" style="margin-left: 16px;">
        <span class="dropdown-link">
          <span class="drop-name" :title="$t('text')">{{$t('text')}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item divided command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
// import * as cookie from 'utils/cookie'

export default {
  name: 'e-header',
  data () {
    return {
      label: '',
      options: [
        {
          value: 'cn',
          label: '中文'
        }, {
          value: 'en',
          label: 'English'
        }
      ]
    }
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
      }
    },
    logout () {
      this.$store.dispatch('loginOut').then(res => {
        this.$router.push({path: '/login'})
      })
    },
    langCommand (command) {
      this.label = command.label
      this.$i18n.locale = command.value
    }
  },
  created () {
    this.label = '中文'
  }
}
</script>

<style lang="scss" scoped>
.e-header {
  // text-align: right;
  font-size: 12px;
  .head-right {
    float: right;
  }
  .dropdown-link {
    cursor: pointer;
    .drop-name {
      display: inline-block;
      width: 55px;
      line-height: 14px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
