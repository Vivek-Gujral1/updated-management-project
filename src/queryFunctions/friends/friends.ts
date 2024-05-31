import { ApiResponse } from "@/types/ApiResponse"
import axios from "axios"
import { log } from "console"


export const getFriendRequests = async () => {
    const response = await axios.get<ApiResponse>("/api/friends/get-friend-requests")
    console.log(response);
    
    if (response.data.success) {
        return response.data.users
    }
}