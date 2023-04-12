import { Stack, Typography } from '@mui/material'
import PaperInformation from './PaperInformation'
import LocationInformation from './LocationInformation'

const Description = ({ userState }) => {
	const { bio } = userState
	return (
		<>
			<Stack sx={{ justifyContent: 'center' }}>
				<Typography variant='body1'>{bio || 'Lorem ipsum'}</Typography>
			</Stack>
			<PaperInformation userState={userState} />
			<LocationInformation userState={userState} />
		</>
	)
}

export default Description
