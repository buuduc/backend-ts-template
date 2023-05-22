import * as joi from 'joi'
import { NodeEnvironment } from 'src/constants'
import { ConfigInterface } from 'src/types'

const envVars = joi
  .object<ConfigInterface>({
    NODE_ENV: joi.string().valid(...Object.keys(NodeEnvironment)).default(NodeEnvironment.development),
    SERVER_PORT: joi.number().min(1000).max(10000).default(3000),
    MONGO_URL: joi.string().required(),
    MONGO_USERNAME: joi.string().required(),
    MONGO_PASSWORD: joi.string().required(),
    MONGO_DATABASE: joi.string().required(),
  })
  .options({ stripUnknown: true })

  export default envVars
