import { LeanDocument , FilterQuery , UpdateQuery } from 'mongoose';
import { ClientDocument } from '../../models/client.model';
import Session, { SessionDocument } from '../../models/session.model';
import config from '../../../config.json';
import { sign, decode } from '../../utils/jwt.utils';
import { get } from 'lodash';
import { findClient } from '../client/client.service';

export const sessions: Record<string,
{ sessionId: string; mail: string; valid: boolean}> = {};

export function createSession(mail: string, firstName: string) {
    const sessionId = String(Object.keys(sessions).length +1);

    const session = { sessionId, mail, valid: true, firstName};

    sessions[sessionId] = session;

    return session;
}

export function getSession(sessionId: string) {
    const session = sessions[sessionId];

    return session && session.valid ? session : null;
}

export function invalidateSession(sessionId: string) {
    const session = sessions[sessionId];

    if (session) {
        sessions[sessionId].valid = false;
    }

    return sessions[sessionId];
}
/*
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
*/