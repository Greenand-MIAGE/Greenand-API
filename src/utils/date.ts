import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export const dateFR = () => {
    return format(new Date(), 'dd/MM/yyyy HH:mm:ss', { locale: fr });
};
