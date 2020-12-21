<template>
  <div id="app">
    <router-view v-if="visible" />
    <div v-else style="margin-top: 10vh; text-align: center ">
      <a-spin>
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      </a-spin>
    </div>
    <password v-if="modelVisible" :pageId="selfEvaluation.id" @setVisible="() => { this.visible = true }" />
    <sidebar />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import password from '@/components/password'
export default {
  name: "App",
  components: {
    password
  },
  data() {
    return {
      visible: false,
      modelVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'selfEvaluation'
    ])
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions([
      'GetToken',
      'GetResume'
    ]),
    async init () {
      await this.GetToken()
      await this.GetResume({ params: { slug: 'resume' } })
      if (this.selfEvaluation.needPassWord && !this.selfEvaluation.content) {
        this.modelVisible = true
      } else {
        this.visible = true
      }
    }
  }
}
</script>