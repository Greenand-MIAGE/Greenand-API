import { LeanDocument } from "mongoose";
import { ClientDocument } from "../models/client.model";
import Session, {SessionDocument} from "../models/session.model";
import config from "../../config.json";
import {sign} from "../utils/jwt.utils";

export async function createSession(clientId : string,clientAgent: string) {
    const session = await Session.create({client : clientId,clientAgent});

    return session.toJSON();
}

export function createAccessToken(
    {
        client,
        session,
    }: {
        client :
            | Omit<ClientDocument,"password">
            | LeanDocument<Omit<ClientDocument,"password">>;

        session : 
            | Omit<SessionDocument,"password">
            | LeanDocument<Omit<SessionDocument,"password">>;
        }) {

            const accessToken = sign(
                {...client,session: session._id},
                {expiresIn: config.accessTokenTtl}
            );

            return accessToken;
        }