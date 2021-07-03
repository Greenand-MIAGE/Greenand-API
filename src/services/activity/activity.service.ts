import Activity, { ActivityDocument } from "../../models/activity.model";
import { DocumentDefinition } from "mongoose";

export const createActivity = async (input: DocumentDefinition<ActivityDocument>) => {
    try {
        return await Activity.create(input);
      } catch (err) {
        throw new Error(err);
      }
}