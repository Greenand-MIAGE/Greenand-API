import { get } from "lodash";
import { Request, Response } from "express";
import { createLand } from "../../services/land/land.service";
import log from "../../logger";
import {
  findClient,
} from "../../services/client/client.service";
import { findLandClient } from "../../services/land/land.service";

export const createLandHandler = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const clientId = req.client.clientId;
    const body = req.body;

    const land = await createLand({ ...body, client: clientId });
    
    return res.send(land);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const getLandClientByIdHandler = async(req: Request, res: Response) => {``
  const clientId = req.params.clientId;

  const client = await findClient({ clientId });

  if (!client) {
    return res.sendStatus(404);
  }

  const land = await findLandClient({ clientId });

  return res.send(land);
}
