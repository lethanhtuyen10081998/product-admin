import { NextApiResponse } from 'next';
import { NextIronRequest, withSession } from 'src/auth/session';
import { apiInstanceAuthentication } from 'src/providers/authProvider';
import endpoints from 'src/services/endpoints';

export default withSession(async (request: NextIronRequest, res: NextApiResponse) => {
  try {
    const { url, ...others } = request.body;
    const data = await apiInstanceAuthentication({
      request,
      url: endpoints.AGENCIES_REGISTER,
      data: others,
    });
    res.status(data?.status).send(data?.data || []);
  } catch (error: any) {
    res.status(error.response.status).send(error.response.data || []);
  }
});
