// import {DEV_URL, PROD_URL} from '@env';

const devEnvVariables = {
  SERVER_URL: 'http://192.168.0.11:9000',
};

const prodEnvVariables = {
  SERVER_URL: 'https://localhost:9000',
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;
