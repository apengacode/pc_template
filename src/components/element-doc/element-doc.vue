<template>
  <div class="element-doc">
    <div class="element-doc-header">
      {{ title }}
    </div>
    <div class="element-doc-container">
      <div class="element-doc-box">
        <slot name="element"></slot>
      </div>
      <div class="element-doc-code">
        <div class="code-container" ref="codeContainerRef">
            <slot name="code"></slot>
        </div>
        <div class="code-title" @click="onShowCodeClick">
          <span v-show="!showCode" class="iconfont icon-xiajiantou"></span>
          <span v-show="showCode" class="iconfont icon-shangjiantou"></span>
          <span v-show="!showCode">显示代码</span>
          <span v-show="showCode">隐藏代码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDoc',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showCode: true,
      codeHeight: 0
    }
  },
  computed: {
    // codeContainerHeight() {
    //   console.log(this.$refs.codeContainerRef.offsetHeight)
    //   return this.$refs.codeContainerRef.offsetHeight
    // }
  },
  mounted() {
    this.codeHeight = this.$refs.codeContainerRef.offsetHeight
    this.$refs.codeContainerRef.style.height = this.codeHeight + 'px'
  },
  methods: {
    onShowCodeClick() {
      this.showCode = !this.showCode
      if (this.showCode) {
        this.$refs.codeContainerRef.style.height = this.codeHeight + 'px'
      }else {
        this.$refs.codeContainerRef.style.height = '0px'
        // this.$refs.codeContainerRef.style.padding = '0px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.element-doc-header {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
  padding: 50px 0 20px;
}
.element-doc-container {
  width: 1000px;
  border: 1px solid #ccc;
  .element-doc-box {
    padding: 24px;
    border-bottom: 1px solid #ccc;
  }
  .element-doc-code {
    .code-container {
      background-color: #f9f9f9;
      overflow: hidden;
      box-sizing: border-box;
      transition: all 300ms;
    //   height: 0;
    }
    .code-title {
      &:hover {
        background-color: #999;
      }
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 14px;
        margin-right: 10px;
      }
    }
  }
}
</style>
