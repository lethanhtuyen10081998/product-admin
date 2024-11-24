import { NextApiResponse } from 'next';
import { COOKIE_REFRESH_TOKEN_KEY, COOKIE_TOKEN_KEY } from 'src/auth/cookie';
import { NextIronRequest, withSession } from 'src/auth/session';

export default withSession(async (request: NextIronRequest, res: NextApiResponse) => {
  // await apiInstance
  //   .post('/login', request.body)
  //   .then(async (response: ResponseSignIn) => {
  //     request.session.set(COOKIE_TOKEN_KEY, 'access_token');
  //     request.session.set(COOKIE_REFRESH_TOKEN_KEY, 'refresh_token');

  //     await request.session.save();
  //     res.status(200).json(response?.data || []);
  //   })
  //   .catch((error: { response: { status: number; data: any } }) => {
  //     res.status(500).json(error.response.data || error);
  //   });

  console.log('request.session', request.session);

  request.session.set(COOKIE_TOKEN_KEY, 'access_token');
  request.session.set(COOKIE_REFRESH_TOKEN_KEY, 'refresh_token');

  await request.session.save();

  return res.status(200).json({ message: 'success' });
});
