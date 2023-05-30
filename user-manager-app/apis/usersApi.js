import apiClient from '../utils/apiClient'

const urlFragment = 'users'

export async function getUsers() {
  const response = await apiClient.get(urlFragment)
  return response.data
}

export async function deleteUser(id) {
  await apiClient.delete(`${urlFragment}/${id}`)
}

export async function updateUser(id, updatedUser) {
  const response = await apiClient.put(`${urlFragment}/${id}`, updatedUser)
  return response.data
}

export async function createUser(user) {
  const response = await apiClient.post(`${urlFragment}`, user)
  return response.data
}

export default { getUsers, deleteUser, updateUser, createUser }
