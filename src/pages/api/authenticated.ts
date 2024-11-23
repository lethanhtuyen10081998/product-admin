import { NextApiResponse } from 'next';
import { NextIronRequest, withSession } from 'src/auth/session';
import { Routes } from 'src/constants/route';
import { apiInstanceAuthentication } from 'src/providers/authProvider';

export default withSession(async (request: NextIronRequest, res: NextApiResponse) => {
  try {
    let url: any = '';
    let body: any = null;

    if (request.method == 'GET' || request.method == 'DELETE') {
      const { url: link, ...others } = request.query;
      url = link;
      body = others;
    }

    if (request.method == 'POST' || request.method == 'PUT') {
      const { url: link, ...others } = request.body;
      url = link;
      body = others;
    }

    const data = await apiInstanceAuthentication({
      request,
      url,
      data: body,
    });
    res.status(data?.status).send(data?.data || []);
  } catch (error: any) {
    if (error?.response?.data.statusCode === 401 || error?.response?.status === 401) {
      request.session?.destroy();
      request.push(`${Routes.SIGN_IN}?action=logout`);
      res.end();
      return;
    }

    res
      .status(error?.response?.data.statusCode || error?.response.status || 500)
      .send(error?.response?.data || []);
  }
});
