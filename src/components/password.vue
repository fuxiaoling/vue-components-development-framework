<style lang="stylus" scoped>
  #password-modal
    /deep/ .ant-modal-body
      padding 65px 50px
    .button
      margin-top 1rem
</style>
<template>
  <a-modal id="password-modal" v-model="visible" centered :footer="null" width="50%">
    <a-input-password v-model="password" placeholder="请输入查看密码" />
    <a-button class="button" type="primary" :loading="loading" @click="getResume" block>  提 交 </a-button>
  </a-modal>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    pageId: {
      type: Number,
      requried: true
    }
  },
  data () {
    return {
      visible: true,
      loading: false,
      password: '',
    }
  },
  methods: {
    ...mapActions([
      'GetResume'
    ]),
    async getResume () {
      if (!this.password.trim()) return
      this.loading = true
      this.GetResume({ pathParams: { id: this.pageId }, params: { password: this.password } }).then(resumes => {
        if (Array.isArray(resumes) && resumes.length === 1 && resumes[0].content) {
          this.loading = false
          this.visible = false
          this.$emit('setVisible')
        } else {
          this.loading = false
          this.$message.error('验证出错，请稍后再试')
        }
      }).catch(() => {
        this.loading = false
        this.$message.error('密码错误')
      })
    }
  }
}
</script>