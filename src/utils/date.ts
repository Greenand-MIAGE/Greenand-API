import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const dateFR = () => {
  return format(new Date(), "dd/MM/yyyy HH:mm:ss", { locale: fr });
};

export const reservationDayFR = () => {
  return format(new Date(), "dd/MM/yyyy", { locale: fr });
};

export const reservationHourFR = () => {
  return format(new Date(), "HH:mm", { locale: fr });
};
