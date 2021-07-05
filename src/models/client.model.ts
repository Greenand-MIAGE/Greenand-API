import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config.json";
import { v4 as uuidv4 } from "uuid";

export interface ClientDocument extends mongoose.Document {
  id: string;
  lastName: string;
  firstName: string;
  birthdayDate: Date;
  street: string;
  city: string;
  postalCode: number;
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
    id: {
      type: String,
      unique: true,
      default: () => uuidv4(),
    },
    lastName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 75,
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 75,
      lowercase: true,
      trim: true,
    },
    street: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    postalCode: {
      type: Number,
      required: true,
      lowercase: true,
      trim: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },
    profession: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },
    profilPicture: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

ClientSchema.pre(`save`, async function (next: mongoose.HookNextFunction) {
  let client = this as ClientDocument;

  if (!client.isModified(`password`)) return next();

  const salt = await bcrypt.genSalt(config.SALT_WORK_FACTOR);

  const hash = await bcrypt.hashSync(client.password, salt);

  client.password = hash;

  return next();
});

ClientSchema.methods.comparePassword = async function (clientpassword: string) {
  const client = this as ClientDocument;

  return bcrypt.compare(clientpassword, client.password).catch((e) => false);
};

const Client = mongoose.model<ClientDocument>(`Client`, ClientSchema);

export default Client;
