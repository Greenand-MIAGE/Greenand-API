//@ts-nocheck
import { Request, Response } from "express";
import { validatePassword } from "../../services/client/client.service";
import { signJWT } from "../../utils/jwt.utils";
import {
  createSession,
  invalidateSession,
} from "../../services/session/session.service";

export async function createClientSessionHandler(req: Request, res: Response) {
  const { mail, password } = req.body;

  const client = await validatePassword({ mail, password });

  if (!client) {
    return res.status(401).send(`Invalid username/mail or password`);
  }

  const session = createSession(mail, client.firstName, client._id);

  const accessToken = signJWT(
    {
      mail: client.mail,
      name: client.firstName,
      clientId: client._id,
      sessionId: session.sessionId,
    },
    `1800s`
  );

  const refreshToken = signJWT({ sessionId: session.sessionId }, `1y`);

  res.cookie(`accessToken`, accessToken, {
    maxAge: 1800000,
    httpOnly: true,
  });

  res.cookie(`refreshToken`, refreshToken, {
    maxAge: 3.154e10,
    httpOnly: true,
  });

  return res.send(session);
}

export function getClientSessionHandler(req: Request, res: Response) {
  return res.send(req.client);
}

export function deleteClientSessionHandler(req: Request, res: Response) {
  res.cookie(`accessToken`, ``, {
    maxAge: 0,
    httpOnly: true,
  });

  res.cookie(`refreshToken`, ``, {
    maxAge: 0,
    httpOnly: true,
  });

  const session = invalidateSession(req.client.sessionId);
  return res.send(session);
}
