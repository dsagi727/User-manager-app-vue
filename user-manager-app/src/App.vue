<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../store/user'
import UsersTable from './components/usersTable.vue'
import CreateUserForm from './components/createUserForm.vue'
import AppTitle from './components/appTitle.vue'

const { getUsers } = useUserStore()

onMounted(async () => {
  try {
    await getUsers()
  } catch (error) {
    alert('Failed to fetch users')
  }
})
</script>

<template>
  <AppTitle />
  <div class="container">
    <CreateUserForm />
    <UsersTable />
  </div>
</template>

<style scoped></style>
