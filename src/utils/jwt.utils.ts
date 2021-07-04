import jwt from 'jsonwebtoken';
import config from '../../config.json';

export function sign(object:Object,options?: jwt.SignOptions | undefined) {
    return jwt.sign(object,config.PRIVATE_KEY,options);
}

export function signJWT(payload: object, expiresIn: string | number) {
    return jwt.sign(payload, config.PRIVATE_KEY, { algorithm: `RS256`, expiresIn});
}

export function verifyJWT(token: string) {
    try {
        const decoded = jwt.verify(token, config.PUBLIC_KEY);
        return {payload: decoded, expired: false};
    } catch (error) {
        return {payload: null, expired: error.message.includes(`jwt expired`)};
    }
}

export function decode(token: string) {
    try {
        const decoded = jwt.verify(token, config.PRIVATE_KEY);

        return { valid: true, expired: false, decoded};
    }
    catch (error){
        console.log({ error });
        return {
            valid: false,
            expired: error.message === `jwt expired`,
            decoded: null,
        };
    }
}