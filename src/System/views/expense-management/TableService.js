import axios from 'axios'

export const getAllExpense = () => {
    return axios.get('/api/user/all')
}
export const getExpenseById = (id) => {
    return axios.get('/api/user', { data: id })
}
export const deleteExpense = (User) => {
    return axios.post('/api/user/delete', User)
}
export const addNewExpense = (User) => {
    return axios.post('/api/user/add', User)
}
export const updateExpense = (User) => {
    return axios.post('/api/user/update', User)
}

