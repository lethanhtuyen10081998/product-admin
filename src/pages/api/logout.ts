import { NextApiResponse } from 'next';
import { COOKIE_REFRESH_TOKEN_KEY, COOKIE_TOKEN_KEY } from 'src/auth/cookie';
import { NextIronRequest, withSession } from 'src/auth/session';

export default withSession(async (request: NextIronRequest, res: NextApiResponse) => {
  try {
    request.session.unset(COOKIE_TOKEN_KEY);
    request.session.unset(COOKIE_REFRESH_TOKEN_KEY);

    await request.session.save();
    res.status(200).json([]);
  } catch (error) {
    res.status(500).json(error || []);
  }
});
