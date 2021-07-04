import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { decode, signJWT, verifyJWT } from '../utils/jwt.utils';
import { getSession,  } from '../services/session/session.service';
import { getClientSessionHandler } from '../controllers/session/session.controller';
import log from '../logger';

function deserializeClient(
    req : Request,
    res : Response,
    next : NextFunction
) {
    const { accessToken, refreshToken } = req.cookies;
    log.info(req.cookies)

    if (!accessToken) return next();

    const { payload: client, expired } = verifyJWT(accessToken);
    
    if (client) {
        // @ts-ignore
        req.client = payload;

        return next();
    }

    const { payload: refresh } = expired && refreshToken ? verifyJWT(refreshToken) : { payload: null};

    if (!refresh) {
        return next();
    }
    //@ts-ignore
    const session = getSession(refresh.sessionId);

    if(!session){
        return next();
    }

    const newAccessToken = signJWT(session, `5s`);

    res.cookie(`accessToken`,newAccessToken, {
        maxAge: 300000,
        httpOnly: true,
    });

    //@ts-ignore
    req.client = verifyJWT(newAccessToken).payload;


        return next();

};

export default deserializeClient;