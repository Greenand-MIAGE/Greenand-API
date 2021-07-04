import { Request, Response, NextFunction } from 'express';
import { signJWT, verifyJWT } from '../utils/jwt.utils';
import { getSession,  } from '../services/session/session.service';

function deserializeClient(
    req : Request,
    res : Response,
    next : NextFunction
) {
    const { accessToken, refreshToken } = req.cookies;
    
    if (!accessToken) return next();

    const { payload, expired } = verifyJWT(accessToken);
    
    if (payload) {
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