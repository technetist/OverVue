<template>
    <div>
        <h3>Sign Up</h3>
        <div class="mx-4 align-items-center justify-content-center">
            <div class="form-group">
                <input
                        type="text"
                        placeholder="email"
                        class="form-control mb-2"
                        v-model="email">
                <input type="password"
                       placeholder="password"
                       class="form-control mb-2"
                       v-model="password">
                <input type="password"
                       placeholder="confirm password"
                       class="form-control mb-3"
                       v-model="password_confirmation">
                <button
                        class="btn btn-primary"
                        @click="signUp">
                    Sign Up
                </button>
            </div>
            <br>
            <p v-if="error.message">{{ error.message }}</p>
            <br>
        </div>
        <router-link to="/signin">Already have an account? Sign In</router-link>
    </div>
</template>

<script>
  import {firebaseApp} from "../firebaseApp";

  export default {
    data() {
      return {
        email: '',
        password: '',
        password_confirmation: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signUp: function () {
        if (this.password === this.password_confirmation) {
          firebaseApp.auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .catch(e => {
              this.error.message = e.message;
            })
        } else {
          this.error.message = "Passwords need to match";
        }
      }
    }
  }
</script>
