import Activity, { ActivityDocument } from "../../models/activity.model";
import { DocumentDefinition, Types } from "mongoose";
import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import { ObjectId } from "mongodb";
import log from "../../logger";

export const createActivity = async (
  input: DocumentDefinition<ActivityDocument>
) => {
  try {
    return await Activity.create(input);
  } catch (err) {
    throw new Error(err);
  }
};

export const reservationActivity = async (
  query: FilterQuery<ActivityDocument>,
  update: UpdateQuery<ActivityDocument>,
  options: QueryOptions = { lean: true }
) => {
  const reservation = Activity.updateOne(
    { _id: query.activityId },
    update,
    options
  );
  return reservation;
};

export const deleteCreneau = async (
  query: FilterQuery<ActivityDocument>,
  update: UpdateQuery<ActivityDocument>,
  options: QueryOptions = { lean: true }
) => {
  const deletedCreneau = Activity.updateOne(
    { _id: query.activityId },
    update,
    options
  );
  return deletedCreneau;
};

export const addSchedule = async (
  query: FilterQuery<ActivityDocument>,
  update: UpdateQuery<ActivityDocument>,
  options: QueryOptions = { lean: true }
) => {
  const schedule = Activity.findOneAndUpdate(query.activityId, update, options);

  return schedule;
};

export const getCrenau = async (
  query: FilterQuery<ActivityDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Activity.find(
    { "disponibility._id": Types.ObjectId(query.body._id) },
    {},
    options
  );
};

export const findActivity = async (
  query: FilterQuery<ActivityDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Activity.findById(new ObjectId(query.activityId), {}, options);
};

export const getActivies = async () => {
  try {
    return await Activity.find({});
  } catch (err) {
    throw new Error(err);
  }
};
