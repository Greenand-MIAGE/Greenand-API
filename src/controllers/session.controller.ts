import {Request,Response} from 'express';
import { validatePassword } from '../services/client.service';
import { createAccessToken, createSession, findSessions, updateSession } from '../services/session.service';
import config from '../../config.json';
import { sign } from '../utils/jwt.utils';
import { get } from 'lodash';

export async function createClientSessionHandler(req: Request, res: Response) {

    // validating username/mail and password
    const client = await validatePassword(req.body);

    if (!client) {
        return res.status(401).send(`Invalid username/mail or password`);

    }

    // create a session
    const session = await createSession(client._id,req.get(`client-agent`) || `` );

    // access token
    const accessToken = createAccessToken(
        {
            client,
            session,
        }
    );

    // refresh token
    const refreshToken = sign(session, {
        expiresIn: config.REFRESH_TOKEN_TTL
    });

    // send the tokens
    return res.send({accessToken,refreshToken});
}

export async function invalidateClientSessionHandler(req: Request, res:Response) {
    const sessionId = get(req,`client.session`);

    await updateSession({ _id: sessionId}, { valid : false});

    return res.sendStatus(200);
}

export async function getUserSessionHandler(req: Request, res: Response) {
    const clientId = get(req,`client._id`);

    const sessions = await findSessions({client: clientId,valid: true});

    return res.send(sessions);
}