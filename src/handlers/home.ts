import handlerWrapper, { HandlerFunction } from "src/utils/handlerWrapper";


const handler: HandlerFunction = async () => {
 return('Server is running')
}
export default handlerWrapper(handler)
