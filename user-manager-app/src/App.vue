<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../store/user'
import UsersTable from './components/usersTable.vue'

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
  <div class="container">
    <UsersTable />
  </div>
</template>

<style scoped></style>
