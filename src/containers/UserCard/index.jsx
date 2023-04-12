import { Grid, CardMedia, Stack } from '@mui/material'
import PrincipalInformation from '../../components/PrincipalInformation'
import Description from '../../components/Description'

const UserCard = ({ userState }) => {
	const { avatar_url: AvatarUrl } = userState
	return (
		<Grid container spacing={2} sx={{ marginTop: '15px' }}>
			<Grid item xs={3}>
				<CardMedia
					component='img'
					alt='GitHub'
					image={AvatarUrl}
					sx={{ borderRadius: '50%', marginLeft: '5px' }}
				/>
			</Grid>
			<Grid item xs={9}>
				<Stack direction='column' spacing={1} sx={{ margin: '2px' }}>
					<PrincipalInformation userState={userState} />
					<Description userState={userState} />
				</Stack>
			</Grid>
		</Grid>
	)
}

export default UserCard
