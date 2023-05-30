<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../store/user'
import EditUserModal from './editUserModal.vue'

const { users, deleteUser } = useUserStore()

const selectedUser = ref({})

function handleSelectUser(user) {
  selectedUser.value = user
}


async function handleDeleteClick(id) {
  try {
    const confirmDelete = confirm('Are you sure?')
    if (confirmDelete) {
      await deleteUser(id)
    }
  } catch (error) {
    alert('Cannot remove user')
  }
}
</script>

<template>
  <table class="table table-striped table-fixed">
    <thead>
      <tr>
        <th>#id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>
          <button
            class="btn btn-primary me-2"
            data-bs-toggle="modal"
            data-bs-target="#editUserModal"
            @click="handleSelectUser(user)"
          >
            Edit
          </button>
          <button class="btn btn-danger" @click="handleDeleteClick(user.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <EditUserModal :user="selectedUser" />
</template>

<style scoped></style>
