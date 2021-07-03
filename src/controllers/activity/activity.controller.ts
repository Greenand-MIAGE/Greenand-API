import { get } from "lodash";
import { Request, Response } from "express";
import { createActivity } from "../../services/activity/activity.service";
import log from '../../logger';

export const createActivityHandler = async (req: Request, res: Response) => {
  try {
    const clientId = get(req, `client.client`);
    const landId = req.params.landId;
    log.info(landId)

    const body = req.body;

    const activity = await createActivity({
      ...body,
      client: clientId,
      land: landId,
    });
    return res.send(activity);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};
