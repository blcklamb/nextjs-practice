const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

const COLORS = {
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

interface LogArgs {
  json: unknown;
  actionName?: string;
}

const formatJSON = (json: unknown) =>
  COLORS.yellow + JSON.stringify(json, null, 2) + COLORS.reset;

const log = (
  message: string,
  json: unknown,
  color: string,
  isError: boolean = false
) => {
  if (IS_DEVELOPMENT) {
    const formattedMessage = `${color}${message}${COLORS.reset}`;
    const formattedJSON = formatJSON(json);
    console[isError ? "error" : "log"](formattedMessage);
    console[isError ? "error" : "log"](formattedJSON);
  }
};

const logInfo = ({ json, actionName }: LogArgs) => {
  const message = `⛳️ [LOG] Method ${COLORS.bold}${actionName}${COLORS.reset} is being called with arguments:`;
  log(message, json, COLORS.blue);
};

const logSuccess = ({ json, actionName }: LogArgs) => {
  const message = `✅ [LOG] Method ${COLORS.bold}${actionName}${COLORS.reset} succeeded with result:`;
  log(message, json, COLORS.green);
};

const logError = ({ json, actionName }: LogArgs) => {
  const message = `❌ [ERROR] Method ${COLORS.bold}${actionName}${COLORS.reset} failed with error:`;
  log(message, json, COLORS.red, true);
};

export { logInfo, logSuccess, logError };
