import { object, string, number } from 'yup';

export const createLandSchema = object({
    body: object({
        street: string()
        .required(`Street name is required`)
        .min(2, `The street name is to short - should be 2 chars minium`)
        .max(75, `The street name is to long - should be 75 chars maximum`)
        .matches(
          /^[a-z0-9àâçéèêëîïôûùüÿñæœ .-]*$/i,
          `Street name can only contain Latin letters.`
        ),
      city: string()
        .required(`City name is required`)
        .min(2, `The city name is to short - should be 2 chars minium`)
        .max(75, `The city name is to long - should be 75 chars maximum`)
        .matches(
          /^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i,
          `City name can only contain Latin letters.`
        ),
      postalCode: number()
        .required(`Postal code is required`)
        .moreThan(0, `The postal code is negative - should be positive`)
        .max(100000, `The postal code required 5 character`)
        .integer(),
        surface: number()
            .required(`Surface is required`)
            .moreThan(0, `The surface is negative - should be positive`)
            .integer()
    }),
});