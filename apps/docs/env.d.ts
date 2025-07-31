// types/env.d.ts or global.d.ts
declare namespace NodeJS {
  export interface ProcessEnv {
    readonly APP_ENV: "development" | "production";
    readonly TINYBIRD_HOST: string;
    readonly TINYBIRD_TOKEN: string;
    readonly SHEET_WEB_APP: string;
    readonly SHEET_TOKEN: string;
    readonly AWS_ACCESS_KEY_ID: string;
    readonly AWS_SECRET_ACCESS_KEY: string;
    readonly AWS_REGION: string;
    readonly SES_FROM_ADDRESS: string;
  }
}
