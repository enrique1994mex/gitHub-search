import { Container } from '@mui/material'
import Search from './components/Search'
import { useEffect, useState } from 'react'
import { getUser } from './services/user'
import UserCard from './containers/UserCard'

const App = () => {
	const [inputUser, setInputUser] = useState('octocat')
	const [userState, setUserState] = useState('inputUser')
	const [notFound, setNotFound] = useState(false)

	const getGithubUser = async (user) => {
		const userResponse = await getUser(user)

		if (userState === 'octocat') {
			localStorage.setItem('octocat', userResponse)
		}

		if (userResponse.message === 'Not Found') {
			console.log('Aquí')
			const { octocat } = localStorage
			setInputUser(octocat)
			setNotFound(true)
		} else {
			setUserState(userResponse)
		}
	}

	useEffect(() => {
		getGithubUser(inputUser)
	}, [inputUser])

	return (
		<Container
			sx={{
				background: 'whitesmoke',
				width: '80vw',
				height: '500px',
				borderRadius: '16px',
				marginTop: '40px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Search setInputUser={setInputUser} />
			<UserCard userState={userState} />
		</Container>
	)
}

export default App
