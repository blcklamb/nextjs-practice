import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

export class ActionError extends Error {}

export const action = createSafeActionClient({
  handleServerError(e) {
    console.error("Action error:", e.message);
    throw e;
  },
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
});
