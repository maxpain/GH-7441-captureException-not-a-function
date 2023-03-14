import * as Sentry from "@sentry/serverless";
Sentry.captureException(new Error("test"));
