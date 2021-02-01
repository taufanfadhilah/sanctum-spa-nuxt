<template>
  <div class="container pt-5">
    <div class="row mt-5">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Login</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="doLogin">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="type your email"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="type your password"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  auth: 'guest',
  data() {
    return {
      form: {
        email: 'test@gmail.com',
        password: 'secret123',
      },
    }
  },
  methods: {
    doLogin() {
      const data = this.form
      this.$auth
        .loginWith('local', {
          data,
        })
        .then(() => {
          swal('Login Success', 'Hi, welcome', 'success').then(() =>
            this.$router.push('/')
          )
        })
        .catch((err) => {
          if (err) {
            swal(
              'Login Failed',
              'Please check your email and password again',
              'error'
            )
          }
        })
    },
  },
}
</script>

<style></style>
