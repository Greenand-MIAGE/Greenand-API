import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface ClientDocument extends mongoose.Document{
    comparePassword(password: string): Promise<boolean>;
    lastName: string;
    firstName: string;
    birthdayDate: Date;
    address: string;
    phone: string;
    profession: string;
    description: string;
    profilPicture: string;
    createAt: Date;
    updateAt: Date;
}

const ClientSchema = new mongoose.Schema(
    {
        lastName: {type: String, required: true},
        password: {type: String, required: true},
    },
    { timestamps: true }
);

ClientSchema.methods.comparePassword = async function (
    password: string
) {
    const user = this as ClientDocument;

    return bcrypt.compare(password, user.password).catch((e) => false);
}

const Client = mongoose.model<ClientDocument>('Client', ClienSchema);

export default Client;