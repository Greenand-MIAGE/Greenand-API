import jwt from 'jsonwebtoken';
import config from '../../config.json';

const privateKey = config.privateKey;

export function sign(object:Object,options?: jwt.SignOptions | undefined) {
    return jwt.sign(object,privateKey,options);
}