import { LeanDocument , FilterQuery , UpdateQuery } from 'mongoose';
import { ClientDocument } from '../models/client.model';
import Session, { SessionDocument } from '../models/session.model';
import config from '../../config.json';
import { sign, decode } from '../utils/jwt.utils';
import { get } from 'lodash';
import { findClient } from './client.service';
import { sign } from '../utils/jwt.utils';

export async function createSession(clientId: string, clientAgent: string) {
    const session = await Session.create({ client: clientId, clientAgent });

    return session.toJSON();
}

export function createAccessToken(
    {
        client,
        session,
    }: {
        client:
        | Omit<ClientDocument, `password`>
        | LeanDocument<Omit<ClientDocument, `password`>>;

        session:
        | Omit<SessionDocument, `password`>
        | LeanDocument<Omit<SessionDocument, `password`>>;
    }) {

    const accessToken = sign(
        { ...client, session: session._id },
        { expiresIn: config.ACCESS_TOKEN_TTL }
    );

            return accessToken;
        }

export async function reIssueAccessToken({
    refreshToken,
}: {
    refreshToken: string;
}) {
    const { decoded } = decode(refreshToken);

    if (!decoded || !get(decoded, `_id`)) return false;

    const session = await Session.findById(get(decoded, `_id`));

    if (!session || !session?.valid) return false;

    const client = await findClient({ _id: session.client});

    if (!client) return false;

    const accessToken = createAccessToken({ client, session});

    return accessToken;
}

export async function updateSession(
    query: FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>
) {
    return Session.updateOne(query, update);
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    return Session.find(query).lean();
}
