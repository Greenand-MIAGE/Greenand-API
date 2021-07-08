import { v4 as uuidv4 } from "uuid";

export const sessions: Record<
  string,
  { sessionId: string; mail: string; valid: boolean }
> = {};

export function createSession(
  mail: string,
  firstName: string,
  clientId: string
) {
  const sessionId = uuidv4();

  const session = { sessionId, mail, valid: true, firstName, clientId };

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
