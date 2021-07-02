import Skill, { SkillDocument } from "../../models/skill.model";
import { DocumentDefinition, FilterQuery, QueryOptions } from 'mongoose';

export const createSkill = async (input: DocumentDefinition<SkillDocument>) => {
    try {
        return await Skill.create(input);
    } catch (err) {
        throw new Error(err);
    }
}

export const getSkills = async () => {
    try {
        return await Skill.find({});
    } catch (err) {
        throw new Error(err);
    }
}

export async function findSkill(
    query: FilterQuery<SkillDocument>,
    options: QueryOptions = { lean: true }
) {
    return Skill.findOne(query, {}, options);
}