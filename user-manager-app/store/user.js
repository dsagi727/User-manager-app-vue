import { ref } from 'vue'
import usersAPI from '../apis/usersAPI'

const users = ref([])

export function useUserStore() {
  async function getUsers() {
    users.value = await usersAPI.getUsers()
  }

  async function deleteUser(id) {
    await usersAPI.deleteUser(id)
    users.value = users.value.filter((user) => user.id !== id)
  }

  async function updateUser(updatedUser) {
    const { id, ...userData } = updatedUser
    const response = await usersAPI.updateUser(id, userData)
    users.value = users.value.map((user) => (user.id === id ? response : user))
  }

  return {
    users,
    getUsers,
    deleteUser,
    updateUser,
  }
}
