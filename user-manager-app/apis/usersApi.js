import apiClient from '../utils/apiClient'

const urlFragment = 'users'

export async function getUsers() {
  const response = await apiClient.get(urlFragment)
  return response.data
}

export async function getUser(id) {
  const response = await apiClient.get(urlFragment, id)
  return response.data
}

export async function deleteUser(id) {
  const response = await apiClient.delete(urlFragment, id)
  return response.data
}

export async function updateUser(id) {
  const response = await apiClient.put(urlFragment, id)
  return response.data
}
