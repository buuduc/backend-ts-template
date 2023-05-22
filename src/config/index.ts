import { envValidator } from 'src/middlewares/validators';
import { ConfigInterface } from 'src/types';
import { validateWith } from 'src/utils/validation';
import { Environment } from './environment';

Environment.setup();

export default validateWith<ConfigInterface>(envValidator, process.env)
