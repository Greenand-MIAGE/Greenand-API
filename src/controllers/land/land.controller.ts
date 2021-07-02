import { get } from 'lodash';
import { Request, Response } from 'express';
import { createLand } from '../../services/land/land.service';
import log from '../../logger';

export const createLandHandler = async (req: Request, res: Response) => {
    try {
        const clientId = get(req, `client._id`)
        log.info(clientId)
        const body = req.body;
        log.info(body)

        const land = await createLand({...body, client: clientId});
        return res.send(land);

    } catch (err) {
        return res.status(409).send(err.message);
    }
}