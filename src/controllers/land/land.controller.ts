//@ts-nocheck
import { get } from "lodash";
import { Request, Response } from "express";
import {
  createLand,
  getLands,
  getLandById,
} from "../../services/land/land.service";
import { findClient } from "../../services/client/client.service";
import { findLandClient } from "../../services/land/land.service";

export const createLandHandler = async (req: Request, res: Response) => {
  try {
    const clientId = req.client.clientId;
    const body = req.body;

    const land = await createLand({ ...body, client: clientId });

    return res.send(land);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const getLandClientByIdHandler = async (req: Request, res: Response) => {
  const clientId = req.client.clientId;

  const client = await findClient({ clientId });

  if (!client) {
    return res.sendStatus(404);
  }

  const land = await findLandClient({ clientId });

  return res.send(land);
};

export const getLandsHandler = async (req: Request, res: Response) => {
  try {
    const lands = await getLands();
    return res.send(lands);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const getLandByIdHandler = async (req: Request, res: Response) => {
  try {
    const landId = req.params.landId;
    const land = await getLandById({ landId });
    if (!land) {
      return res.sendStatus(404);
    }
    res.send(land);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};
