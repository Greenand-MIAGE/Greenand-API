import Client, { ClientDocument } from "../../models/client.model";
import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
  Types,
} from "mongoose";
import { omit } from "lodash";

export const createClient = async (
  input: DocumentDefinition<ClientDocument>
) => {
  try {
    return await Client.create(input);
  } catch (err) {
    throw new Error(err);
  }
};

export const getClients = async () => {
  try {
    return await Client.find({});
  } catch (err) {
    throw new Error(err);
  }
};

export const validatePassword = async ({
  mail,
  password,
}: {
  mail: ClientDocument[`mail`];
  password: string;
}) => {
  const client = await Client.findOne({ mail });

  if (!client) {
    return false;
  }
  const isValid = await client.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(client.toJSON(), `password`);
};

export const findClient = async (
  query: FilterQuery<ClientDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Client.findById(Types.ObjectId(query.clientId), {}, options);
};

export const findAndUpdateSkillClient = (
  query: FilterQuery<ClientDocument>,
  update: UpdateQuery<ClientDocument>,
  options: QueryOptions
) => {
  return Client.findOneAndUpdate(
    Types.ObjectId(query.clientId),
    update,
    options
  );
};
