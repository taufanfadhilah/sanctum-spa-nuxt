<template>
  <div class="container pt-5">
    <div class="row mt-5">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Detail User</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="doLogout">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  v-model="form.name"
                  type="name"
                  class="form-control"
                  placeholder="type your name"
                />
              </div>
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
                <button class="btn btn-primary">Logout</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: true,
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
    }
  },
  async beforeCreate() {
    const user = await this.$auth.user
    this.form = user
  },
  methods: {
    doLogout() {
      this.$auth.logout().then(() => {
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style></style>
