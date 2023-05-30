<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../../store/user'

const userFormDataInitialState = {
  email: '',
  firstName: '',
  lastName: '',
}

const { createUser } = useUserStore()
const userFormData = reactive({ ...userFormDataInitialState })
const isFormVisible = ref(false)
const createUserForm = ref()

function showForm() {
  isFormVisible.value = true
}

async function handleFormSubmit() {
  try {
    if (createUserForm.value.checkValidity()) {
      await createUser(userFormData)
      Object.assign(userFormData, userFormDataInitialState)
      isFormVisible.value = false
    }
  } catch (error) {
    alert(error.message)
  }
}
</script>

<template>
  <button
    v-show="!isFormVisible"
    class="btn btn-lg btn-primary mb-3"
    @click="showForm"
  >
    Create new user
  </button>
  <div class="d-flex flex-column align-items-center">
    <h2>Create new user</h2>
    <form
      v-show="isFormVisible"
      ref="createUserForm"
      @submit.prevent="handleFormSubmit"
    >
      <div class="mb-3">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="userFormData.email"
          type="email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="firstName">First name</label>
        <input
          id="firstName"
          v-model="userFormData.firstName"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="lastName">Last name</label>
        <input
          id="lastName"
          v-model="userFormData.lastName"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary bt-lg">Save</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 100%;
}

@media (min-width: 992px) {
  form {
    width: 50%;
  }
}
</style>
