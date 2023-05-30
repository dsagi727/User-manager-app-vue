import { ref } from 'vue'
import usersApi from '../apis/usersAPI'

const users = ref([])

export function useUserStore() {
  async function getUsers() {
    users.value = await usersApi.getUsers()
  }

  async function deleteUser(id) {
    await usersApi.deleteUser(id)
    users.value = users.value.filter((user) => user.id !== id)
  }

  async function updateUser(updatedUser) {
    const { id, ...userData } = updatedUser
    const response = await usersApi.updateUser(id, userData)
    users.value = users.value.map((user) => (user.id === id ? response : user))
  }

  async function createUser(user) {
    const response = await usersApi.createUser(user)
    users.value = [...users.value, response]
  }

  return {
    users,
    getUsers,
    deleteUser,
    updateUser,
    createUser,
  }
}
