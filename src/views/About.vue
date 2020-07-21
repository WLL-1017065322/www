<template>
  <div class="about">
    <MarkdownPreview :height="400" theme="oneDark" :initialValue="htmlMd"></MarkdownPreview>
  </div>
</template>

<script>
import { MarkdownPreview } from 'vue-meditor'
// const aboutMe = require('../assets/about.md')

const url = '/about.md'

export default {
  data () {
    return {
      // aboutMe: aboutMe
      htmlMd: ''
    }
  },
  methods: {
    getMarkdown () {
      this.$axios.get(url).then((res) => {
        this.htmlMd = res.data
      })
      console.log(this.htmlMd)
    }
  },
  created () {
    this.getMarkdown()
  },
  components: {
    MarkdownPreview
  }
}
</script>

<style scoped lang="less">
.about {
  width: 700px;
  margin: 20px auto;
  font-size: 1rem!important;
}
</style>
