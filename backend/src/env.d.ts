declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;

    // Email
    EMAIL_USER?: string;
    EMAIL_PASS?: string;

    // Security
    SECRET_KEY?: string;
    SESSION_SECRET?: string;
    CLIENT_ORIGIN?: string;
    NODE_ENV?: "development" | "production" | "test";
    TURNSTILE_SECRET_KEY?: string;

    // Database
    DB_USER?: string;
    DB_HOST?: string;
    DB_NAME?: string;
    DB_PASSWORD?: string;
    DB_PORT?: string;
    DATABASE_URL?: string;
  }


}

