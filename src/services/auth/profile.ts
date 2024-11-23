import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import { SET_USER_PROFILE } from 'src/redux/userProfile/userProfileType';

export type ResponseRegister = {
  data: {};
};

export function getProfile(): Promise<ResponseRegister> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.GET_PROFILE,
    },
  });
}

const useProfile = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const profile = useSelector((state: RootState) => state.userProfileReducer);
  const dispatch = useDispatch();

  const mutation = useCallback(async () => {
    setLoading(true);

    return getProfile()
      .then((response) => {
        dispatch({ type: SET_USER_PROFILE, payload: response.data });
        return response;
      })
      .catch((error) => {
        return error;
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return {
    mutation,
    loading,
    profile,
  };
};

export default useProfile;
