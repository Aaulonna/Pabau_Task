import Link from "next/link";
import { formatDate } from "@/helpers/formatDate";
import { BookingItemInterface } from "@/types/types";

function BookingItem({ date, startTime, href }: BookingItemInterface) {
  return (
    <Link
      href={href}
      className="list-group-item list-group-item-action my-2 p-2 rounded"
    >
      A booking on <strong>{formatDate(date)}</strong> starting at{" "}
      <strong>{startTime}</strong>
    </Link>
  );
}

export default BookingItem;
