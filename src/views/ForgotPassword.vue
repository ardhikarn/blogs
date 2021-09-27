<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }">
            Login
          </router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <Email class="icon" />
          </div>
          <div v-show="error" class="error">{{ this.errorMsg }}</div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "ForgotPassword",
  components: {
    Email,
    Modal,
    Loading,
  },
  data() {
    return {
      email: "",
      modalActive: null,
      modalMessage: "",
      loading: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    resetPassword() {
      if (this.email !== "") {
        this.loading = true;
        firebase
          .auth()
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.modalMessage =
              "If your account exists, you will receive a email";
            this.loading = false;
            this.modalActive = true;
          })
          .catch((err) => {
            this.modalMessage = err.message;
            this.loading = false;
            this.modalActive = true;
          });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out the field";
      return;
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        margin-bottom: 32px;
        text-align: center;
      }
    }
  }
}
</style>