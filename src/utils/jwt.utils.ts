import jwt from "jsonwebtoken";
import { privateKey, publicKey } from "./config";

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}

export function signJWT(payload: object, expiresIn: string | number) {
  return jwt.sign(payload, privateKey, { algorithm: `RS256`, expiresIn });
}

export function verifyJWT(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return { payload: decoded, expired: false };
  } catch (error) {
    return { payload: null, expired: error.message.includes(`jwt expired`) };
  }
}

export function decode(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);

    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === `jwt expired`,
      decoded: null,
    };
  }
}
