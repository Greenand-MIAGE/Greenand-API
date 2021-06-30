  
import { object, string, ref } from 'yup';

export const createSkillSchema = object({
  body: object({
    label: string()
    .required(`Label is required`)
    .matches(/^[a-zA-Z0-9_.-]*$/, `Label can only contain Latin letters.`),
  }),
});
