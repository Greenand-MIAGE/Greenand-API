import { get } from 'lodash';
import { Request, Response, NextFunction} from 'express';

export function requiresClient(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //@ts-ignore
    if (!req.client) {
        return res.status(403).send(`Invalid Session`);
    }

    return next();
};

export default requiresClient;