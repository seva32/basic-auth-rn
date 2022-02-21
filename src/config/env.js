import { SERVER_DEV, SERVER_PROD } from '@env';

const devEnvVariables = {
  SERVER_URL: SERVER_DEV,
};

const prodEnvVariables = {
  SERVER_URL: SERVER_PROD,
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;
