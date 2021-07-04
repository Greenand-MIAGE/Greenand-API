import {Request,Response} from 'express';
import { validatePassword } from '../../services/client/client.service';
import config from '../../../config.json';
import { signJWT } from '../../utils/jwt.utils';
import Client from '../../models/client.model';
import { createSession, invalidateSession } from '../../services/session/session.service';

export async function createClientSessionHandler(req: Request, res: Response) {
   const { mail, password } = req.body;
   
    const client = await Client.findOne({ mail });
    
    if (!client ) {
        return res.status(401).send(`Invalid username/mail or password`);

    }

    const session =  createSession(mail, client.firstName ,client._id);

    const accessToken = signJWT({mail: client.mail, name: client.firstName,clientId: client._id, sessionId: session.sessionId}, `5s`);
    
    const refreshToken = signJWT({ sessionId: session.sessionId}, `1y`);


    res.cookie(`accessToken`, accessToken, {
        maxAge: 300000,
        httpOnly: true,
    });

    res.cookie(`refreshToken`, refreshToken, {
        maxAge: 3.154e10,
        httpOnly: true,
    });
   
    return res.send(session);
}


export  function getClientSessionHandler(req: Request, res: Response) {
     //@ts-ignore
    return res.send(req.client);
}

export function deleteClientSessionHandler(req: Request, res: Response) {
   
    res.cookie(`accessToken`,``, {
        maxAge: 0,
        httpOnly: true,
    });

    res.cookie(`refreshToken`,``, {
        maxAge: 0,
        httpOnly: true,
    });

    //@ts-ignore
   const session = invalidateSession(req.client.sessionId)
    return res.send(session);
}