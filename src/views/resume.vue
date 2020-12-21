<style lang="stylus">
  @keyframes rota{
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
  .resume-container
    background #f5f5f5
    min-height 1600px
    .top-bar
      width 100%
      height 10px
      > .fl
        width 300px
        height 10px
        background #e1dfe2
      > .fr
        width 900px
        height 20px
        .color1
          width 150px
          height 10px
          background #4f4f4f
    .header
      position relative
      height 180px
      padding 20px 80px
      background-color #f5f5f5
      border-top 3px solid #4f4f4f
      border-bottom 3px solid #4f4f4f
      .corner
        position absolute
        top -1px
        left 140px
        width 0px
        height 0px
        border 10px solid #4f4f4f
        border-left-color transparent
        border-right-color transparent
        border-bottom-color transparent
      .header-container
        width 100%
        > .fl
          position relative
          width 140px
          height 140px
          background #e1dfe2
          border-radius 50%
          .avatar-image
            width 120px
            height 120px
            margin 10px auto
            img
              border-radius 50%
          svg
            position absolute
            left 0
            top 0
            z-index 9999
            circle
              transform-origin center
            #circle
              stroke-dasharray 400
              stroke-dashoffset 400
              animation 4s 1s rota infinite linear reverse
        > .fr
          position relative
          width 820px
          padding-top 25px
          color #4f4f4f
          .popover-list
            position absolute
            top 3px
            right -55px
            .icon-circle
              width 35px
              height 35px
              line-height 35px
              text-align center
              background-color #4f4f4f
              border-radius 50%
              margin 5px
              &:hover .anticon
                color #d5d5d5
              .anticon
                cursor pointer
                color #f5f5f5
                font-size 25px
                vertical-align middle
                margin 0
          .myName
            font-size 38px
            font-weight 700
            line-height 50px
            letter-spacing 6px
          .status
            font-size 24px
            font-weight 700
            line-height 40px
            letter-spacing 2px
    .content-container
      width 900px
      background #4f4f4f
      .content-title
        width 150px
        height 100%
      .content-items
        width 750px
        padding 30px
        background #f5f5f5
        .content-box
          position relative
          .title
            position absolute
            top 0
            left -120px
            color #fff
            width 90px
            line-height 35px
            text-align left
            font-size 18px
            font-weight 700
            text-align right
            padding-right 10px
            border-bottom 1px solid #ededed
            z-index 99999
            transition all 0.2s
            -ms-transition all 0.4s
          .subtitle
            width 100%
            line-height 36px
            text-align left
            font-size 18px
            font-weight 700
            border-bottom 1px solid #4f4f4f
            .anticon
              float right
              margin-top 10px
          .content
            padding 30px 0
            p
              line-height 26px
        #main-experience,
        #work-experience
          .ant-timeline-item-head
            background #f5f5f5
            top 1px
          .ant-timeline-item-head-blue
            border-color #4f4f4f
          .ant-timeline-item-head-red,
          .ant-timeline
            color #4f4f4f
          .ant-timeline-item-head-red
            top 6px
          .ant-timeline-item-content
            font-size 18px
            font-weight 700
            span,
            p
              font-size 14px
              font-weight normal
            span
              margin-right 10px
              color #999
        #project-experience
          .project-item
            padding 30px 0 30px 0
            border-bottom 1px dashed #4f4f4f
            &:first-child
              padding-top 0
            &:last-child
              border-bottom none
            .project-name
              font-size 18px
              font-weight 700
              line-height 35px
              a
                padding-left 10px
                text-decoration underline
              span
                font-size 14px
                color #999
                font-weight normal
                float right
            .project-introduction
              padding 5px 0 10px 0
            .project-technology
              p
                margin -3px 0
              span 
                margin-right 10px
                color #999
            .project-myJob
              margin-top 10px
              a
                color #52b1ff
                &:hover
                  text-decoration underline
              > .fl
                width 70px
                color #999
              > .fr
                width 620px
                line-height 22px
</style>
<style>
@media screen and (max-width: 1199px) , screen and (max-height: 950px) {
}
</style>
<template>
  <div id="resume" class="container resume-container">
    <div class="top-bar clearfix">
      <div class="fl"></div>
      <div class="fr clearfix">
        <div class="color1 fl"></div>
      </div>
    </div>
    <header class="header">
      <div class="corner"></div>
      <!-- 头部 | 开始 -->
      <div class="header-container clearfix">
        <div class="fl">
          <div class="avatar-image"><img width="120" height="120" :src="resume.avatarImage" /></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">
          <circle 
            id="circle"
            cx="70"
            cy="70"
            r="65"
            fill="none"
            stroke="#4f4f4f"
            stroke-width="8"
            stroke-linecap="square"
            paint-order="fill markers stroke">
          </circle>
          </svg>
        </div>
        <div class="fr">
          <div class="myName">{{resume.myName}}</div>
          <div class="status" v-if="resume.resumeStatus == 0">{{resume.jobPosts}}</div>
          <div class="status" v-else>{{`求职岗位：${resume.jobPosts}`}}</div>
          <div class="popover-list">
            <!--微信加好友 | 开始-->
            <a-popover placement="left">
              <template slot="content">
                <div class="wechart-friend">
                  <img style="" :src="resume.wechatImage" />
                  <p style="text-align: center">请注明“招聘”</p>
                </div>
              </template>
              <div class="icon-circle"><a-icon type="wechat" /></div>
            </a-popover>
            <!--微信加好友 | 结束-->
            <!--QQ联系 | 开始-->
            <a :href="`http://wpa.qq.com/msgrd?v=3&amp;uin=${resume.qq}&amp;site=qq&amp;menu=yes`" target="blank">
              <div class="icon-circle"><a-icon type="qq" :style="{ fontSize: '23px', marginTop: '-4px'}" /></div>
            </a>
            <!--QQ联系 | 结束-->
            <!--邮件 | 开始-->
            <a :href="`http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=${resume.email}`" target="_blank">
              <div class="icon-circle"><a-icon type="mail" theme="filled" :style="{ fontSize: '20px'}" /></div>
            </a>
            <!--邮件 | 结束-->
          </div>
        </div>
      </div>
      <!-- 头部 | 结束 -->
    </header>
    <main class="main clearfix" style="background-color:#e1dfe2">
      <a-affix v-if="!isMobile" :offset-top="0">
        <profile class="fl" />
      </a-affix>
      <profile v-else class="fl" />
      <div class="pr fr clearfix">
        <div class="content-container fr">
          <div class="content-title fl"></div>
          <div class="content-items fr">
            <!-- 自我评价 | 开始 -->
            <div id="self-evaluation" class="content-box">
              <div class="title">自我评价</div>
              <div class="subtitle">SELF-EVALUATION<a-icon type="smile" /></div>
              <div class="content" v-html="selfEvaluation.content"></div>
            </div>
            <!-- 自我评价 | 结束 -->
            <!-- 主要经历 | 开始 -->
            <div id="main-experience" class="content-box">
              <div class="title">主要经历</div>
              <div class="subtitle">MAIN EXPERIENCE<a-icon type="trophy" /></div>
              <div class="content">
                <a-timeline>
                  <a-timeline-item color="red">
                    <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                    2021年 ......
                  </a-timeline-item>
                  <a-timeline-item v-for="item in resume.mainExperience" :key="item.year">
                    {{item.year}}年<span v-if="item.note">{{item.note}}</span>
                    <p v-for="event in item.events" :key="event">{{event}}</p>
                  </a-timeline-item>
                </a-timeline>
              </div>
            </div>
            <!-- 主要经历 | 结束 -->
            <!-- 工作经历 | 开始 -->
            <div id="work-experience" class="content-box">
              <div class="title">工作经历</div>
              <div class="subtitle">WORK<a-icon type="laptop" /></div>
              <div class="content">
                  <a-timeline-item v-for="item of resume.workExperience" :key="item.company">
                    {{item.company}}
                    <p><span>就职时间</span> {{item.time}} </p>
                    <p><span>公司职称</span> {{item.position}} </p>
                    <p v-if="item.post"><span>项目职称</span> {{item.post}}</p>
                    <p v-if="item.rating"><span>甲方评级</span> {{item.rating}}</p>
                    <p v-if="item.peopleCount"><span>公司规模</span> 约{{item.peopleCount}}人</p>
                  </a-timeline-item>
              </div>
            </div>
            <!-- 工作经历 | 结束 -->
            <!-- 项目经历 | 开始 -->
            <div id="project-experience" class="content-box">
              <div class="title">项目经历</div>
              <div class="subtitle">PROJECT<a-icon type="appstore" /></div>
              <div class="content">
                <div class="project-item" v-for="item of resume.projectExperience" :key="item.name">
                  <div class="project-name">
                    <a-icon :type="{private: 'coffee', team: 'team', independently: 'user'}[item.type]" style="margin-right:10px" />
                    {{item.name}}
                    <span>{{item.developmentDate}}</span>
                  </div>
                  <div class="project-introduction" v-html="item.introduction"></div>
                  <div class="project-technology" v-if="item.technologyStack">
                    <P v-if="item.technologyStack.backEnd"><span>后端技术</span> {{item.technologyStack.backEnd}}</P>
                    <P v-if="item.technologyStack.frontEnd"><span>前端技术</span> {{item.technologyStack.frontEnd}}</P>
                    <P v-if="item.technologyStack.supportingSystem"><span>支撑系统</span> {{item.technologyStack.supportingSystem}}</P>
                  </div>
                  <div class="project-myJob clearfix" v-if="item.myJob && item.myJob.daily">
                    <div class="fl">日常工作</div>
                    <div class="fr">{{item.myJob.daily}} </div>
                  </div>
                  <div class="project-myJob clearfix" v-if="item.myJob && item.myJob.prominent">
                    <div class="fl">突出业绩</div>
                    <div class="fr">{{item.myJob.prominent}} </div>
                  </div>
                  <div class="project-myJob clearfix" v-if="item.extendLink">
                    <div class="fl"><a :href="item.extendLink.link" target="_block">{{item.extendLink.label}}</a></div>
                    <div class="fr"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 项目经历 | 结束 -->
            <!-- 教育经历 | 开始 -->
            <div id="education-experience" class="content-box">
              <div class="subtitle">EDUCATION<a-icon type="read" /></div>
              <div class="title">教育经历</div>
              <div class="content">
                <p v-for="item of resume.education" :key="item.school">{{item.date}} {{item.school}} {{item.mark}}</p>
              </div>
            </div>
            <!-- 教育经历 | 结束 -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { throttle } from '@/utils'
import profile from './layer/profile'
import resume from '@/data.js'
export default {
  name: "Resume",
  components: {
    profile
  },
  data () {
    return {
      resume,
      elements: [
        'self-evaluation',
        'main-experience',
        'work-experience',
        'project-experience',
        'education-experience'
      ],
      scrollFlag: false,
      containerPostions: [],
      positions: new Map()
    }
  },
  computed: {
    ...mapGetters([
      'selfEvaluation'
    ]),
    isMobile () {
      return window.matchMedia("(max-width: 1199px)").matches || window.matchMedia("(max-height: 930px)").matches
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.getPostions()
      window.addEventListener('scroll', throttle(this.setAbsolute, 100))
    },
    getPostions () {
      for (let [index, el] of this.elements.entries()) {
        const element = document.getElementById(el)
        const offsetTop = this.getElementOffsetTop(element)
        const height = element.clientHeight
        if (index === 0) this.containerPostions.push(offsetTop)
        if (index === this.elements.length - 1) this.containerPostions.push(offsetTop + height)
        this.positions.set(element, [offsetTop, offsetTop + height])
      }
    },
    setAbsolute () {
      let scrolltop = document.documentElement.scrollTop
      if (scrolltop >= this.containerPostions[0] && scrolltop <= this.containerPostions[1]) {
        for (let [element, position] of this.positions.entries()) {
          const [top, bottom] = position
          if (scrolltop >= top && scrolltop <= (bottom - 36)) {
            element.children[0].style.top = `${scrolltop - top}px`
          } else {
            element.children[0].style.top = `0px`
          }
          this.scrollFlag = false
        }
      } else {
        if (this.scrollFlag) return false
        for (let element of this.positions.keys()) element.children[0].style.top = `0px`
        this.scrollFlag = true
      }
    },
    getElementOffsetTop (element) {
      let realTop = element.offsetTop
      let parent = element.offsetParent
      while (parent !== null) {
        realTop += parent.offsetTop
        parent = parent.offsetParent
      }
      return realTop
    }
  }
}
</script>