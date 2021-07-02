import Skill, { SkillDocument } from "../../models/skill.model";
import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";

export const createSkill = async (input: DocumentDefinition<SkillDocument>) => {
  try {
    return await Skill.create(input);
  } catch (err) {
    throw new Error(err);
  }
};

export const getSkills = async () => {
  try {
    return await Skill.find({});
  } catch (err) {
    throw new Error(err);
  }
};

export const findSkill = async (
  query: FilterQuery<SkillDocument>,
  options: QueryOptions = { lean: true }
) => {
  return Skill.findById(query.skillId, {}, options);
};

export const findAndUpdateSKill = async (
  query: FilterQuery<SkillDocument>,
  update: UpdateQuery<SkillDocument>,
  options: QueryOptions
) => {
  return Skill.findByIdAndUpdate(query.skillId, update, options);
};
