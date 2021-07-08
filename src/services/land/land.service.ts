import Land, { LandDocument } from "../../models/land.model";
import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
  Types,
} from "mongoose";
import log from "../../logger";

export const createLand = async (input: DocumentDefinition<LandDocument>) => {
  try {
    return await Land.create(input);
  } catch (err) {
    throw new Error(err);
  }
};

export const getLands = async () => {
  try {
    return await Land.find({});
  } catch (err) {
    throw new Error(err);
  }
};

export const getLandById = async (
  query: FilterQuery<LandDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Land.find({ _id: Types.ObjectId(query.landId) }, {}, options);
};

export const findLandClient = async (
  query: FilterQuery<LandDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Land.find({ client: Types.ObjectId(query.clientId) }, {}, options);
};
