declare namespace NodeJS {
  export interface ProcessEnv {
    readonly APP_ENV: "development" | "production";
    readonly TINYBIRD_HOST: string;
    readonly TINYBIRD_TOKEN: string;
  }
}
