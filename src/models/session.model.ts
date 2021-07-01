import mongoose from "mongoose";
import { ClientDocument} from "./client.model";

export interface SessionDocument extends mongoose.Document {
    client : ClientDocument["_id"];
    valid : boolean;
    clientAgent : string;
    createdAt : Date;
    updateAt : Date;
}

const SessionSchema = new mongoose.Schema(
    {
        client : {type : mongoose.Schema.Types.ObjectId,ref:"Client"},
        valid : {type : Boolean,default:true},
        clientAgent : {type : String},
    },
    {timestamps : true}
);

const Session = mongoose.model<SessionDocument>("Session",SessionSchema);

export default Session;