import axios from 'axios'

const taskApi = axios.create(
   {
      baseURL: 'http://localhost:8000/task/api/v1/task/',
   })
export const getAllTask = () => taskApi.get('/')



export const createTask = (task) => taskApi.post('/', task);


