<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>标题</span>
          <a class="icon-close" href="javascript:" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a class="btn" href="javascript:" v-if="btnType === '1'" @click="$emit('submit')">查看购物车</a>
          <a class="btn" href="javascript:" v-if="btnType === '2'" @click="$emit('cancel')">取消</a>
          <div class="btn-group" v-if="btnType === '3'">
            <a class="btn" href="javascript:">确定</a>
            <a class="btn" href="javascript:">取消</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    // 弹框类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框标题
    title: String,
    // 按钮类型: 1:确定按钮 2:取消按钮 3:确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/modal";

</style>
