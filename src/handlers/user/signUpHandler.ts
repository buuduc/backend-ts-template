import { Response, Request} from "express";
import { errorResponse, successResponse } from "src/utils/response";
import { signUpUserParams } from "./IUserHandler";


const handler = async (req: Request, res: Response) => {
  try {
    const {email, username, userType} = req.body as signUpUserParams
    return successResponse(res, { user: 'test' });
  } catch (error) {
    return errorResponse(res, error);
  }
}
export default handler
