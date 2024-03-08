import BookingDetails from "@/components/BookingDetails";
import { BookingDetailsPageInterface } from "@/types/types";

const BookingDetailsPage = ({ params }: BookingDetailsPageInterface) => {
  return (
    <>
      <BookingDetails id={Number.parseInt(params.id)} />
    </>
  );
};

export default BookingDetailsPage;
