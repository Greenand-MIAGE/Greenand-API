import Client, { ClientDocument } from '../models/client.model';
import { DocumentDefinition } from 'mongoose';

export const createClient = async (input: DocumentDefinition<ClientDocument>) => {
    try {
        return await Client.create(input);
    } catch (err){
        throw new Error(err);
    }
}

export const getClients = async () => {
    try {
        return await Client.find({});
    } catch (err) {
        throw new Error(err);
    }
}