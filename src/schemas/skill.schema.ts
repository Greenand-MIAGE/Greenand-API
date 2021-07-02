  
import { object, string, ref } from 'yup';

export const createSkillSchema = object({
  body: object({
    label: string()
    .required(`Label is required`)
    .min(2, `Your label  is to short - should be 2 chars minimum`)
    .max(25, `Your label is to long - should be 25 chars maximum`)
    .matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, `Label can only contain Latin letters.`),
  }),
});
