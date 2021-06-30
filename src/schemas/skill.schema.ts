  
import { object, string, ref } from 'yup';

export const createSkillSchema = object({
  body: object({
    label: string()
    .required(`Label is required`)
    .min(2, `Your label  is to short - should be 3 chars minimum`)
    .max(25, `Your label is to long - should be 100 chars maximum`)
    .matches(/^[a-zA-Z0-9_.-]*$/, `Label can only contain Latin letters.`),
  }),
});
