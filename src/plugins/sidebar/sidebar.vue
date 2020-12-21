
<style lang="stylus" scoped>
  .sidebar
    box-sizing border-box
    margin 0
    padding 0
    color rgba(0,0,0,.65)
    font-size 12px
    font-variant tabular-nums
    line-height 1.5
    list-style none
    font-feature-settings "tnum"
    position fixed
    right 100px
    bottom 240px
    width 60px
    z-index 10
    .sidebar-item
      position relative
      display flex
      -webkit-box-align center
      -webkit-align-items center
      -ms-flex-align center
      align-items center
      -webkit-box-pack center
      -webkit-justify-content center
      -ms-flex-pack center
      justify-content center
      -webkit-box-orient vertical
      -webkit-box-direction normal
      -webkit-flex-direction column
      -ms-flex-direction column
      flex-direction column
      cursor pointer
      margin 10px 0
      width 60px
      height 54px
      font-size 12px
      -webkit-box-sizing border-box
      box-sizing border-box
      text-align center
      background-color #fff
      border-radius 4px
      border 1px solid #eee
      &:hover
        background-color #4f4f4f
        color #fff
  .qrcode-wrapper
    #qrcode
      margin 3px
    p
      text-align center
  .payment-wrapper
    display flex
    p
      text-align center
  .thanks
    text-align center
  .goto-top
    .ant-back-top
      width 60px
      height 50px
      bottom 200px
</style>
<template>
  <div class="sidebar clearfix">
    <!--下载 | 开始-->
    <div v-if="resume.downloadUrl" class="sidebar-item" @click="downlaodResume">
      <a-icon type="cloud-download" :style="{ fontSize: '22px' }" />
      <div>下载简历</div>
    </div>
    <!--下载 | 结束-->
    <!--回到顶部 | 开始-->
    <div class="goto-top">
      <a-back-top :visibilityHeight="0">
        <div class="ant-back-top-inner sidebar-item">
          <a-icon type="up" :style="{ fontSize: '22px' }" />
          <span>顶部</span>
        </div>
      </a-back-top>
    </div>
    <!--回到顶部 | 结束-->
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
import resume from '@/data.js'
export default {
  data() {
    return {
      resume,
      qrcode: null
    }
  },
  methods: {
    downlaodResume () {
      window.open(
        resume.downloadUrl,
        '_blank'
      )
    },
    handleHoverCreateQrcode () {
      if (!this.qrcode) {
        setTimeout(() => {
          this.qrcode = new QRCode(document.getElementById('qrcode'), {
            text: window.location.href,
            width: 130,
            height: 130,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
          })
        }, 0)
      }
    }
  }
}
</script>