import Activity, { ActivityDocument } from "../../models/activity.model";
import { DocumentDefinition } from "mongoose";
import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import { ObjectId } from 'mongodb';
import { ClientDocument } from "../../models/client.model";
import { Session } from "inspector";
import { SessionDocument } from "../../models/session.model";

export const createActivity = async (input: DocumentDefinition<ActivityDocument>) => {
    try {
        return await Activity.create(input);
      } catch (err) {
        throw new Error(err);
      }
}

export const reservationActivity = async (
  query: FilterQuery<ActivityDocument>,
  update: UpdateQuery<SessionDocument>,
  options: QueryOptions = { lean: true }
  ) => {
    const reservation = Activity.findOneAndUpdate(query.activityId, update, options);

    return reservation;
}

export const addSchedule = async (
  query: FilterQuery<ActivityDocument>,
  update: UpdateQuery<SessionDocument>,
  options: QueryOptions = { lean: true }
) => {
  const schedule = Activity.findOneAndUpdate(query.activityId, update, options);

  return schedule;
}

export const findActivity = async (
  query: FilterQuery<ActivityDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Activity.findById(new ObjectId(query.activityId), {}, options);
};