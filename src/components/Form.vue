<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Vue.js + Vuelidate - Form Validation</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  v-model.trim="$v.firstName.$model"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.firstName.$error
                  }"
                />
                <div
                  v-if="!$v.firstName.required"
                  class="invalid-feedback"
                >
                  First Name is required
                </div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  v-model="$v.lastName.$model"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.lastName.$error
                  }"
                />
                <div v-if="!$v.lastName.required" class="invalid-feedback">
                  Last Name is required
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="$v.email.$model"
                  id="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': $v.email.$error }"
                />
                <div v-if="$v.email.$error" class="invalid-feedback">
                  <span v-if="!$v.email.required">Email is required</span>
                  <span v-if="!$v.email.email">Email is invalid</span>
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model="$v.password.$model"
                  id="password"
                  name="password"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.password.$error
                  }"
                />
                <div v-if="$v.password.$error" class="invalid-feedback">
                  <span v-if="!$v.password.required"
                    >Password is required</span
                  >
                  <span v-if="!$v.password.minLength"
                    >Password must be at least 6 characters</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  v-model="$v.confirmPassword.$model"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.confirmPassword.$error
                  }"
                />
                <div
                  v-if="$v.confirmPassword.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.confirmPassword.required"
                    >Confirm Password is required</span
                  >
                  <span v-else-if="!$v.confirmPassword.sameAsPassword"
                    >Passwords must match</span
                  >
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      submitted: false
    };
  },
  validations: {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAsPassword: sameAs("password") }
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    }
  }
};
</script>

<style scoped></style>
