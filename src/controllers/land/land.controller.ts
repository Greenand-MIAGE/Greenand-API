import { omit } from 'lodash';
import { Request, Response } from 'express';
import { createLand } from '../../services/land/land.service';

export const createLandHandler = async (req: Request, res: Response) => {
    try {
        const land = await createLand(req.body);
        return res.send(land);

    } catch (err) {
        return res.status(409).send(err.message);
    }
}

/*
export const deleteLandHandler = async (req: Request, res: Response) => {
    try {

    }
}
*/