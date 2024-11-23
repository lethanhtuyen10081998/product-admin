import { Avatar, Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useProfileContext } from 'src/context/profileContext/hooksContext';
import { useProfileAPI } from 'src/context/profileContext/provider';
import useProfile from 'src/services/auth/profile';

function ProfileView() {
  const { mutation } = useProfile();
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
    <Box px={4} py={3}>
      <Box
        display='flex'
        alignItems='center'
        gap={2}
        sx={{
          overflow: 'hidden',
        }}
      >
        <Avatar alt='Administrator' sx={{ background: (theme) => theme.palette.secondary.main }}>
          AD
        </Avatar>

        <Typography>
          {/* {[profile?.userInfo?.first_name, profile?.userInfo?.last_name].join(' ')} */}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileView;
