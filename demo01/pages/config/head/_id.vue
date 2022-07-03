<template>

</template>

<script>
export default {
  name: "_id",
  data() {
    return {
      id : ""
    }
  },
  head(){
    return {
      title: '标题' + this.id,
      meta: [
        { hid: 'description', name: 'description', content: '此处是网站描述' },
        { hid: 'keywords', name: 'keywords', content: '此处是网站关键词' }
      ]
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
