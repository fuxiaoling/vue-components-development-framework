<style lang="stylus">
.profile-bar
  width 300px
  height 100vh
  padding 30px 30px
  background #e1dfe2
  .profile-box
    width 100%
    height auto
    > .title
      width 100%
      line-height 35px
      text-align left
      font-size 18px
      font-weight 700
      border-bottom 1px solid #4f4f4f
      .anticon
        float right
        margin-top 10px
    > .content
      width 100%
      padding 15px 0
      .content-item
        line-height 28px
        a:hover
          color #4f4f4f
          text-decoration underline
          text-decoration-style dotted
      .content-line
        width 100%
        height 1px
        border-bottom 1px dashed #999999
        margin 15px 0
      &.basic-info span
          margin-right 10px
          color #999999
      &.skills
        padding 5px 0
        span
          display inline-block
          width 98px
          text-align right
          margin-right 10px
          float left
        .ant-collapse-borderless
          background #e1dfe2
          > .ant-collapse-item
            border-bottom 1px dashed #4f4f4f
          .ant-collapse-content-box
            padding 0 0 5px 0
        .ant-collapse-header
          padding-left 0
          font-size 18px
          font-weight 700
          color #4f4f4f
          .ant-collapse-arrow
            right 0
</style>
<template>
  <div class="profile-bar">
    <!-- 基本信息 / BASIC-INFO | 开始 -->
    <div class="profile-box">
      <div class="title">基本信息 / BASIC-INFO<a-icon type="user" /></div>
      <div class="content basic-info">
        <div class="content-item" v-for="[key, item] in Object.entries(resume.basicInfo[0])" :key="key">
          <span>{{key}}</span> {{item}}
        </div>
        <div class="content-line"></div>
        <div class="content-item" v-for="[key, item] in Object.entries(resume.basicInfo[1])" :key="key">
          <span>{{key}}</span> 
          <template v-if="item.startsWith('http')">
            <a :href="item" target="_block">{{item.split('//')[1]}}</a>
          </template>
          <template v-else>
            {{item}}
          </template>
        </div>
      </div>
    </div>
    <!-- 基本信息 / BASIC-INFO | 结束 -->
    <!-- 技能特长 / SKILLS | 开始 -->
    <div class="profile-box mt15">
      <div class="title">技能特长 / SKILLS<a-icon type="code" /></div>
      <div class="content skills">
        <a-collapse :default-active-key="resume.skills[0].alias" :accordion="true" :bordered="false" expandIconPosition="right">
          <template #expandIcon="props">
            <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
          </template>
          <a-collapse-panel v-for="item in resume.skills" :key="item.alias" :header="item.scope">
            <div class="content-item" v-for="[skill, score] in Object.entries(item.skills)" :key="skill">
              <span>{{skill}}</span> <skillsRectBoxs :number="score" />
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
    <!-- 技能特长 / SKILLS | 结束 -->
  </div>
</template>
<script>
import skillsRectBoxs from '@/components/skillsRects'
import resume from '@/data.js'
export default {
  components: {
    skillsRectBoxs
  },
  data() {
    return {
      resume
    }
  }
}
</script>