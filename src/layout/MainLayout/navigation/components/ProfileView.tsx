import { Avatar, Box, Typography } from '@mui/material';
import { useCollapsible } from 'src/context/layoutContext/hooksContext';

function ProfileView() {
  const collapsible = useCollapsible();
  // const { mutation } = useProfile();
  // const { onUpdateLoading, onUpdateProfile } = useProfileAPI();
  // const { profile } = useProfileContext();

  // useEffect(() => {
  //   onUpdateLoading(true);
  //   mutation().then((response) => {
  //     onUpdateProfile(response.data);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [onUpdateLoading, onUpdateProfile]);

  return (
    <Box py={3}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap={!collapsible ? 2 : 0}
        sx={{
          overflow: 'hidden',
        }}
      >
        <Avatar alt='Administrator' sx={{ background: (theme) => theme.palette.secondary.main }}>
          AD
        </Avatar>

        {!collapsible && (
          <Typography>
            {/* {[profile?.userInfo?.first_name, profile?.userInfo?.last_name].join(' ')} */}
            Admin
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ProfileView;
