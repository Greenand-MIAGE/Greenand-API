import { get } from "lodash";
import { Request, Response } from "express";
import {
  addSchedule,
  createActivity,
  findActivity,
  reservationActivity,
} from "../../services/activity/activity.service";
import log from "../../logger";
import { v4 as uuidv4 } from "uuid";

export const createActivityHandler = async (req: Request, res: Response) => {
  try {
      //@ts-ignore
      const clientId = req.client.clientId;
    const landId = req.params.landId;
    log.info(landId);

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

export const reservationActivityHandler = async (
  req: Request,
  res: Response
) => {
  //@ts-ignore
  const clientReservationId = req.client.clientId;
  log.info(clientReservationId);
  const activityId = req.params.activityId;

  const update = [
    {
     client: clientReservationId,
    },
  ];

  const activity = await findActivity({ activityId });

  if (!activity) return res.sendStatus(404);

  const reservation = await reservationActivity(
    { activityId },
    { $push: {reservation: update }},
    {
      new: true,
    });

  return res.send(reservation);
};

export const addScheduleHandler = async (
  req: Request,
  res: Response
) => {
  const clientOwnerId = get(req, `client.client`);
  const activityId = req.params.activityId;
  const activity = await findActivity({ activityId });

  if (!activity) return res.sendStatus(404); 

 
  const update = req.body.disponibility;

    

  
  const schedule = await addSchedule(
    { activityId },
    { $push: {disponibility: [...update] }},
    {
      new: true,
    });

  return res.send(schedule);
};
