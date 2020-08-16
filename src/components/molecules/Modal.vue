<template>
  <div class="example-modal-window">
    <button v-on:click="openModal">show modal</button>
    <modal-container v-on:close="closeModal" v-if="isDisplayModal">
      <p>Vue.js Modal Window!</p>
      <div>
        <input v-model="message" placeholder="edit message ..."/>
      </div>
      <template slot="footer">
        <button @click="doSend">送信</button>
      </template>
    </modal-container>
  </div>
</template>


<script>
import ModalContainer from "@/components/atoms/ModalContainer";
export default {
  name: "Modal",
  data() {
    return {
      isDisplayModal: false,
      message: ""
    }
  },
  components: {ModalContainer},
  methods: {
    closeModal() {
      this.isDisplayModal = false
    },
    openModal() {
      this.isDisplayModal = true
    },
    doSend() {
      if (this.message) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    }
  }
}
</script>

<style scoped>

</style>
