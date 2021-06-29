import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';
import validator from 'validator';
import { fr } from 'date-fns/locale';


export interface ClientDocument extends mongoose.Document {
    lastName: string;
    firstName: string;
    birthdayDate: Date;
    address: string;
    mail: string;
    password: string;
    phone: string;
    profession: string;
    description: string;
    profilPicture: string;
    createAt: Date;
    updateAt: Date;
    comparePassword(clientPassword: string): Promise<boolean>;
}

const ClientSchema = new mongoose.Schema(
    {
        lastName: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 75,
            lowercase: true,
            trim: true,
            validate: [validator.isAlpha]
        },
        firstName: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 75,
            lowercase: true,
            trim: true,
            validate: [validator.isAlpha]
        },
        address: {
            type: String,
            required: false,
            lowercase: true,
            trim: true
        },
        mail: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: [validator.isEmail]
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        phone: {
            type: String,
            required: false,
            lowercase: true,
            trim: true,
            validate: [
                validator.isMobilePhone(`fr-FR`),
            ]
        },

    },
    { timestamps: true }
);

ClientSchema.pre(`save`, async function (next: mongoose.HookNextFunction) {
    let client = this as ClientDocument;

    if (!client.isModified(`password`)) return next();

    // clÃ© 
    const salt = await bcrypt.genSalt(config.get(`Kebab`)); // A modifier 

    const hash = await bcrypt.hashSync(client.password, salt);

    client.password = hash;

    return next();
});

ClientSchema.methods.comparePassword = async function (
    clientpassword: string
) {
    const client = this as ClientDocument;

    return bcrypt.compare(clientpassword, client.password).catch((e) => false);
}

const Client = mongoose.model<ClientDocument>('Client', ClientSchema);

export default Client;