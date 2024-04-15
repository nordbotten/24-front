"use server";

import handleAPICall from "@/actions/handleAPICall";

export type TSubmitBookingState = {
  status: "success" | "idle" | "error";
  message?: string;
};

const submitBooking = async (
  state: TSubmitBookingState,
  formData: FormData
): Promise<TSubmitBookingState> => {
  try {
    const rawFormData = {
      hotelId: formData.get("hotelId"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      fromDate: formData.get("fromDate"),
      toDate: formData.get("toDate"),
      roomType: formData.get("roomType") || undefined,
      roomNumber: formData.get("roomNumber") || undefined,
    };
    const response = await handleAPICall(
      `/hotels/${rawFormData.hotelId}/booking`,
      "POST",
      rawFormData
    );
    if (response.status !== "success") {
      throw new Error(response.message);
    }
    // Todo: invalidate room cache...
    return { status: "success" };
  } catch (error: any) {
    console.error(error);
    return { status: "error", message: error?.message || "Unknown error" };
  }
};

export default submitBooking;
