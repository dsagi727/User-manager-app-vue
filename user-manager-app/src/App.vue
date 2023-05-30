<script setup>
import { onMounted, ref } from 'vue'
import { getUsers } from '../apis/usersApi'

const users = ref([])

const getUsersData = async () => {
  users.value = await getUsers()
  console.log(users.value)
}

onMounted(async () => {
  getUsersData()
})
</script>

<template>
  <div class="container my-5">
    <table class="table table-striped table-fixed">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-primary me-1">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
