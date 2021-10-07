import axios from 'axios'

export const getAllTask = () => {
    return axios.get('/api/user/all') 
}
export const getTaskById = (id) => {
    return axios.get('/api/user', { data: id })
}
export const deleteTask = (User) => {
    return axios.post('/api/user/delete', User)
}
export const addNewTask = (User) => {
    return axios.post('/api/user/add', User)
}
export const updateTask = (User) => {
    return axios.post('/api/user/update', User)
}
