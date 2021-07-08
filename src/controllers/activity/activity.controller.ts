//@ts-nocheck
import { get } from "lodash";
import { Request, Response } from "express";
import {
  createActivity,
  findActivity,
  getActivies,
  reservationActivity,
  getCrenau,
  deleteCreneau,
} from "../../services/activity/activity.service";

export const createActivityHandler = async (req: Request, res: Response) => {
  try {
    const clientId = req.client.clientId;
    const landId = req.params.landId;

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

export const getCreneauHandler = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const creneau = await getCrenau({ body });
    if (!creneau) {
      return res.sendStatus(404);
    }
    res.send(creneau);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const reservationActivityHandler = async (
  req: Request,
  res: Response
) => {
  const clientReservationId = req.client.clientId;
  const activityId = req.params.activityId;
  const body = req.body;
  const idCreneau = req.body.idCreneau;

  const update = [
    {
      client: clientReservationId,
      startOfDay: body.startOfDay,
      startOfHour: body.startOfHour,
    },
  ];

  const activity = await findActivity({ activityId });

  if (!activity) return res.sendStatus(404);

  const deletedCreneau = await deleteCreneau(
    { activityId },
    { $pull: { disponibility: { _id: idCreneau } } },
    { new: true }
  );

  const reservation = await reservationActivity(
    { activityId },
    { $push: { reservation: update } },
    {
      new: true,
    }
  );

  return res.send(reservation && deletedCreneau);
};

export const getActivityByIdHandler = async (req: Request, res: Response) => {
  try {
    const activityId = req.params.activityId;
    const activity = await findActivity({ activityId });
    if (!activity) {
      return res.sendStatus(404);
    }
    res.send(activity);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const getActivitiesHandler = async (req: Request, res: Response) => {
  try {
    const activities = await getActivies();
    return res.send(activities);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};
