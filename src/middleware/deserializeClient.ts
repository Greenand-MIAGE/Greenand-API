import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt.utils';
import { reIssueAccessToken } from '../services/session.service';

const deserializeClient = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    const accessToken = get(req, `headers.authorization`,``).replace(
        /^Bearer\s/,
        ``
    );

    const refreshToken = get(req,`headers.x-refresh`);

    if (!accessToken) return next();

    const { decoded, expired } = decode(accessToken);

    if (decoded) {
        // @ts-ignore
        req.client = decoded;

        return next();
    }

    if (expired && refreshToken) {
        const newAccessToken = await reIssueAccessToken({ refreshToken })
    
        if (newAccessToken) {

            res.setHeader(`x-access-token`, newAccessToken);

            const { decoded } = decode(newAccessToken);

            // @ts-ignore
            req.client = decoded;
        }

        return next();
    }

};

export default deserializeClient;