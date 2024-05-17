import axios from 'axios'

export async function getTodos() {
	const data = await axios.get(
		'https://65f668a941d90c1c5e0ac7e2.mockapi.io/users'
	)
	const parsData = data.data
	return parsData
}

export async function getTodoID(id: string) {
	const data = await axios.get(
		`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users/${id}`
	)
	const parsed = data.data
	return parsed
}

export async function addTodo(post: string) {
	await axios.post(`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users`, {
		title: post,
	})
}
export async function delPost(id: string) {
	await axios.delete(`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users/${id}`)
}
