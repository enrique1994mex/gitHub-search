import { Stack, Typography } from '@mui/material'

const PrincipalInformation = ({ userState }) => {
	const { name, login, created_at: createdAt } = userState
	return (
		<>
			<Stack direction='row' sx={{ justifyContent: 'space-between' }}>
				<Typography variant='h4'>{name}</Typography>
				<Typography variant='subtitle2'>{createdAt}</Typography>
			</Stack>
			<Typography variant='caption'>{`@${login}`}</Typography>
		</>
	)
}

export default PrincipalInformation
