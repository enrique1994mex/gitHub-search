import { urlFetch } from '../constants'

export const getUser = async (user) => {
	try {
		const response = await fetch(`${urlFetch}${user}`, { method: 'GET' })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
