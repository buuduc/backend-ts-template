import { NodeEnvironment } from "src/constants";

export interface ConfigInterface {
  SERVER_PORT: number;
  NODE_ENV: NodeEnvironment;
  MONGO_URL: string;
  MONGO_USERNAME: string;
  MONGO_PASSWORD: string;
  MONGO_DATABASE: string;
}
