import { get } from 'lodash';
import { Request, Response, NextFunction} from 'express';

const requiresClient = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const client = get(req,`client`);

    if (!client) {
        return res.sendStatus(403);
    }

    return next();
};

export default requiresClient;