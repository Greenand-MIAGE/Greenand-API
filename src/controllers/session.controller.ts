import {Request,Response} from "express";
import { validatePassword } from "../services/client.service";
import { createAccessToken, createSession } from "../services/session.service";
import config from "../../config.json";
import {sign} from "../utils/jwt.utils";

export async function createClientSessionHandler(req: Request, res: Response) {

    // validating username/mail and password
    const client = await validatePassword(req.body);

    if (!client) {
        return res.status(401).send("Invalid username/mail or password");

    }

    // create a session
    const session = await createSession(client._id,req.get("client-agent") || "" );

    // access token
    const accessToken = createAccessToken(
        {
            client,
            session,
        }
    );

    // refresh token
    const refreshToken = sign(session, {
        expiresIn: config.refreshTokenTtl
    });

    // send the tokens
    return res.send({accessToken,refreshToken});
}