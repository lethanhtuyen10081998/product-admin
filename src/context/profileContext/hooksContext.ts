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
    username: '',
    wallet: {
      active: 0,
      amount: 0,
      created_at: '',
      id: '',
      updated_at: '',
      user_id: '',
      version: 0,
    },
    phone: '',
  },
  loading: false,
});

export const useProfileContext = () => useContext(ProfileContext);
