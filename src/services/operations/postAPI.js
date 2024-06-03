import { toast } from "react-hot-toast"

import { setLoading} from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { postEndpoints } from "../apis"

const {
    CREATE_POST
} = postEndpoints

export function createPost (title,body) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
          const response = await apiConnector("POST", CREATE_POST, {
            title,
            body
          })
    
          console.log("CREATEPOST API RESPONSE............", response)
    
          if (!response.data.success) {
            throw new Error(response.data.message)
          }
          toast.success("Post created Successful")
        } catch (error) {
          console.log("CREATEPOST API ERROR............", error)
          toast.error("Post creation Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
      }
}