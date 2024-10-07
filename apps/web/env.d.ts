declare namespace NodeJS {
  export interface ProcessEnv {
    APP_URL: string;
    APP_ENV: string;
    AUTH_TOKEN: string;
    LAST_UPDATED: string;
  }
}
