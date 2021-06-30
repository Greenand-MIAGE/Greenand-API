  
import { object, string, ref, number } from 'yup';

export const createActivitySchema = object({
  body: object({
    label: string()
    .required(`Label is required`)
    .min(3, `Your label  is to short - should be 3 chars minimum`)
    .max(100, `Your label is to long - should be 100 chars maximum`),
    clientMax: number(),
    description: string()
      .required(`Description is required`)
      .min(20,`Your description is to short - should be 20 chars minimum`),
  }),
});
