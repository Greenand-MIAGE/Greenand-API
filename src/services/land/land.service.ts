import Land, { LandDocument } from "../../models/land.model";
import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

export const createLand = async (input: DocumentDefinition<LandDocument>) => {
  try {
    return await Land.create(input);
  } catch (err) {
    throw new Error(err);
  }
};

//export const deleteLand = async (inp)

export const getLands = async () => {
  try {
    return await Land.find({});
  } catch (err) {
    throw new Error(err);
  }
};

export const findLandClient = async (
  query: FilterQuery<LandDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Land.findById(query.client.clientId, {}, options);
};
