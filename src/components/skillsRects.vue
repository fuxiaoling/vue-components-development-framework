<style lang="stylus">
  .skills-rect-boxs i
    margin 0 1px
</style>
<template>
  <div class="skills-rect-boxs">
    <i class="rect-box" v-for="n in number" :key="`key-fill-${n}`">
      <svg width=".8em" height=".8em" viewBox="0 0 4 4">
        <rect width="4" height="4" style="fill:#4f4f4f;stroke-width:1;stroke:#4f4f4f" />
      </svg>
    </i>
    <i class="rect-box" v-for="n in (10-number)" :key="`key-empty-${n}`">
      <svg width=".8em" height=".8em" viewBox="0 0 4 4">
        <rect width="4" height="4" style="fill:#bebebe;stroke-width:1;stroke:#bebebe" />
      </svg>
    </i>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>