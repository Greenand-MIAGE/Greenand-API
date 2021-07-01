
import { object, string, ref } from 'yup';

export const createClientSchema = object({
  body: object({
    lastName: string()
      .required(`Last name is required`)
      .min(2, `Your last name is to short - should be 2 chars minium`)
      .max(75, `Your last name is to long - should be 75 chars maximum`)
      .matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, `Last name can only contain Latin letters.`),
    firstName: string()
      .required(`First name is required`)
      .min(2, `Your first name is to short - should be 2 chars minium`)
      .max(75, `Your first name is to long - should be 75 chars maximum`)
      .matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, `First Name can only contain Latin letters.`),
    address: string(),
    mail: string()
      .email(`Must be a valid email`)
      .required(`Email is required`),
    password: string()
      .required(`Password is required`)
      .min(6, `Password is too short - should be 6 chars minimum.`)
      .max(30, `Password is too long - should be 30 chars maximum.`)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
        `Minimum 8 and maximum 30 characters, at least one uppercase letter, one lowercase letter, one number and one special character.`),
    passwordConfirmation: string().oneOf(
      [ref(`password`), undefined],
      `Passwords must match`
    ),
    phone: string()
      .matches(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, `Phone Number contains letters.`),

  }),
  profession: string(),
  description: string(),
  profilPicture: string(),
  skills : object({
    value: string()
    .matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, `Label can only contains Latin letters.`), //TODO: Régler les restrictions sur un objet.
  }),
});

export const createClientSessionSchema = object(
  {
    body: object(
      {
        mail: string()
        .email(`Must be a valid email`)
        .required(`Email is required`), 
        password: string()
      .required(`Password is required`)
      .min(6, `Password is too short - should be 6 chars minimum.`)
      .max(30, `Password is too long - should be 30 chars maximum.`)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
        `Minimum 8 and maximum 30 characters, at least one uppercase letter, one lowercase letter, one number and one special character.`),
    
      }),
  });