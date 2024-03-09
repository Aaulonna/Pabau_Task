"use client";
import { createBooking } from "@/lib/bookings";
import BookingForm from "./BookingForm";
import { formatTime } from "@/helpers/formatTime";
import { CreateBookingDataInterface } from "@/types/types";
import { useRouter } from "next/navigation";
import { alert } from "@/helpers/alert";
import Alert from "./Alert";
import handleRevalidate from "@/helpers/revalidateTag";

const CreateBooking = () => {
  const router = useRouter();

  const handleSubmit = async (bookingData: CreateBookingDataInterface) => {
    const formatedBookingData: CreateBookingDataInterface = {
      ...bookingData,
      start_time: formatTime(bookingData.start_time),
      end_time: formatTime(bookingData.end_time),
    };
    try {
      await createBooking(formatedBookingData);
      handleRevalidate();
      router.push("/booking");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Failed to create booking! Please try again later.", "error");
    }
  };

  return (
    <>
      <BookingForm handleSubmit={handleSubmit} />
      <Alert />
    </>
  );
};

export default CreateBooking;
