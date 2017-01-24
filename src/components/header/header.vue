<template>
  <div class="header">
    <div class="inner">
      <img class="logo" src="./assets/img/logo.png" alt="logo">
      <router-link to="/Home">主页</router-link>
      <router-link to="/About">关于我</router-link>
        <span class="github">
          追求卓越，成功就会在不经意间追上你！
        </span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .header
    background-color #20A0FF
    position fixed
    z-index 2
    top 0
    left 0
    right 0
    .inner
      max-width 800px
      box-sizing border-box
      margin 0px auto
      padding 15px 5px
    a
      color rgba(255, 255, 255, .8)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      margin-right 1.8em
      &:hover
        color #fff
      &.router-link-active
        color #fff
        border-bottom 1px solid #fff
      &:nth-child(6)
        margin-right 0
    .github
      color #fff
      font-size .9em
      margin 0
      float right

  .logo
    width 24px
    margin-right 10px
    display inline-block
    vertical-align middle
</style>
