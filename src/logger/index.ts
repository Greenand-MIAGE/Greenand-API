import logger from "pino";
import { dateFR } from "../utils/date";

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dateFR()}"`,
});

export default log;
