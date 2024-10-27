import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";
import { z } from "zod";
import { logError, logInfo, logSuccess } from "./util";

export class ActionError extends Error {}

export const action = createSafeActionClient({
  handleServerError(e) {
    console.error("Action error:", e.message);

    if (e instanceof ActionError) {
      return e.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
}).use(async ({ next, clientInput, metadata }) => {
  logInfo({
    json: clientInput,
    actionName: metadata.actionName,
  });

  const result = await next();

  if (result.success && !result.data.error) {
    logSuccess({
      json: result.data,
      actionName: metadata.actionName,
    });
  } else {
    logError({
      json: result.data.error,
      actionName: metadata.actionName,
    });
    if (result.serverError) {
      logError({
        json: result.serverError,
        actionName: metadata.actionName,
      });
    }
    if (result.validationErrors) {
      logError({
        json: result.validationErrors,
        actionName: metadata.actionName,
      });
    }
    throw result.serverError;
  }
  return result;
});
