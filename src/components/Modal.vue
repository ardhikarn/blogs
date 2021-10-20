<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMessage }}</p>
      <button v-if="!isQuestion" @click="closeModal">Close</button>
      <div v-else class="question">
        <button @click="confirm">Yes</button>
        <button @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalMessage: {
      type: String,
    },
    isQuestion: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    confirm() {
      this.$emit("confirm-modal");
    }
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }

    .question {
      text-align: center;

      button {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>