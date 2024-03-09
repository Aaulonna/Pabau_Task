import BookingItem from "@/components/BookingItem";
import BookingList from "@/components/BookingList";
import { getBookings } from "@/lib/bookings";
import { BookingDataInterface } from "@/types/types";
import Link from "next/link";

const BookingPage: React.FC = () => {
  return <BookingList />;
};

export default BookingPage;
