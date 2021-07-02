import { object, string, number } from 'yup';

export const createLandSchema = object({
    body: object({
        address: string(),
        commune: string()
            .required(`Commune name is required`)
            .min(2, `The commune name is to short - should be 2 chars minium`)
            .max(75, `The commune name is to long - should be 75 chars maximum`)
            .matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, `Commune name can only contain Latin letters.`),
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