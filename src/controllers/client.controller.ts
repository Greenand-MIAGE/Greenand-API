import { createClient, getClients } from '../services/client.service';
import { omit } from 'lodash';
import { Request, Response } from 'express';

export const createClientHandler = async (req: Request, res: Response) => {
    try{
        const client = await createClient(req.body);
        return res.send(omit(client.toJSON(), `password`));
    }catch (err) {
        return res.status(409).send(err.message);
    }
}

export const getClientsHandler = async (req: Request, res: Response) => {
    try {
        const clients = await getClients();
        return res.send(clients);
    } catch (err) {
        return res.status(409).send(err.message);
    }
}
