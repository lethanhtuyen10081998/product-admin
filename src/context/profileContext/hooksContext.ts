import { createContext, useContext } from 'react';
import { State } from './actions';

export const ProfileContext = createContext<State['data']>({
  profile: {
    userInfo: {
      avatar: '',
      dob: '',
      first_name: '',
      gender: 0,
      last_name: '',
      user_id: '',
    },
    permission: {
      role: '',
      permissions: [],
    },
    username: '',
    phone: '',
  },
  loading: false,
});

export const useProfileContext = () => useContext(ProfileContext);
