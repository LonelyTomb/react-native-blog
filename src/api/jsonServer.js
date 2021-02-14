import axios from 'axios'

const {API_URL} = process.env
export default axios.create({
	baseURL: API_URL,
})