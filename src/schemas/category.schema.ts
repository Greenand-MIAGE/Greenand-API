import { object, string, ref } from "yup";

export const createCategorySchema = object({
  body: object({
    label: string()
      .required(`Label is required`)
      .min(2, `The label is to short - should be 2 chars minium`)
      .max(75, `The label is to long - should be 75 chars maximum`)
      .matches(
        /^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i,
        `Label can contain only Latin letters.`
      ),
  }),
});
