import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const Search = ({ setInputUser }) => {
	const [valueInput, setValueInput] = useState('')

	const onSearchValueChange = ({ target: { value } }) => {
		const inputValue = value
		setValueInput(inputValue)
	}

	const handleSubmit = () => {
		setInputUser(valueInput)
	}

	return (
		<Stack
			direction='row'
			sx={{
				marginTop: '30px',
				width: '80%',
			}}
		>
			<TextField
				id='outlined-basic'
				label='GitHub User'
				variant='outlined'
				placeholder='Octocat'
				value={valueInput}
				onChange={onSearchValueChange}
				sx={{
					width: '90%',
				}}
				InputProps={{
					endAdornment: (
						<IconButton onClick={handleSubmit}>
							<SearchIcon />
						</IconButton>
					),
				}}
			/>
		</Stack>
	)
}

export default Search
