import axios from 'axios';
import get from 'lodash/get';
import { UserInfo } from 'models/user.type';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  data: {
    accessToken: string | null;
    userInfo: UserInfo;
  } | null;
  message?: string;
}

export default async function login(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { username, password, deviceId } = await req.body;

  try {
    const response = await axios.post(`${process.env.NEXT_APP_API_DOMAIN}/auth/login`, {
      username,
      password,
      device_id: deviceId,
    });

    if (response.status === 200) {
      const { data } = await response.data;
      const accessToken = get(data, 'token.access_token');
      const userInfo = get(data, 'user');
      return res.status(200).json({
        data: { accessToken, userInfo },
      });
    } else {
      res.status(response.status).json({ data: null, message: response.statusText });
    }
  } catch (error) {
    return res.status(400).json({ data: null, message: get(error, 'message') });
  }
}
