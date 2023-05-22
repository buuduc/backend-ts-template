import config from "src/config"
import { NodeEnvironment } from "src/constants"

/* eslint-disable no-console */
const suppressInfoLogging = config.NODE_ENV !== NodeEnvironment.development

const infoColorSchema = '\x1b[36m%s%s\x1b[1m\x1b[32m%s\x1b[0m'
const errorColorSchema = '\x1b[41m\x1b[37m%s\x1b[0m%s%s'

export function logInfo(
  serviceName: string,
  message?: string | number,
  important = false
) {
  if ((!suppressInfoLogging || important) && message) {
    console.log(infoColorSchema, serviceName, ': ', message)
  }
}

export function logError(serviceName: string, error: any) {
  console.error(errorColorSchema, serviceName, ': ', error)
}

export function wrapLogger(serviceName: string) {
  return {
    logInfo: (message?: string | number, important?: boolean) =>
      logInfo(serviceName, message, important),
    logError: (error: any) => logError(serviceName, error)
  }
}
