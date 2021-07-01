import {Request,Response} from 'express';
import { validatePassword } from '../services/client/client.service';
import { createAccessToken, createSession } from '../services/session.service';
import config from '../../config.json';
import { sign } from '../utils/jwt.utils';

export async function createClientSessionHandler(req: Request, res: Response) {
    const client = await validatePassword(req.body);

    if (!client) {
        return res.status(401).send(`Invalid username/mail or password`);

    }

    const session = await createSession(client._id,req.get(`client-agent`) || `` );

    const accessToken = createAccessToken(
        {
            client,
            session,
        }
    );

    const refreshToken = sign(session, {
        expiresIn: config.REFRESH_TOKEN_TTL
    });

    return res.send({accessToken,refreshToken});
}