"server only";

import { getLoggedInUser } from "@/appwrite/auth/authService";

export const getCurrentUserAction = async () => {
    const currentUserDetails = await getLoggedInUser();
    if (currentUserDetails.success) {
        return {
            success: true,
            message: "User details fetched successfully",
            data: currentUserDetails.data
        };
    }
    return { success: false, message: currentUserDetails.message };
}