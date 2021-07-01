import jwt from 'jsonwebtoken';
import config from '../../config.json';

const privateKey = config.PRIVATE_KEY;

export function sign(object:Object,options?: jwt.SignOptions | undefined) {
    return jwt.sign(object,privateKey,options);
}