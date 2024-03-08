import { Form, Formik } from "formik";
import { CreateBookingDataInterface } from "@/types/types";
import Input from "./Input";
import * as Yup from "yup";
import { BookingFormInterface } from "@/types/types";

const BookingForm = ({ handleSubmit }: BookingFormInterface) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Formik
          onSubmit={(bookingData: CreateBookingDataInterface) => {
            handleSubmit(bookingData);
          }}
          initialValues={{
            service: "",
            doctor_name: "",
            start_time: "",
            end_time: "",
            date: "",
          }}
          validationSchema={Yup.object({
            service: Yup.string().required("Service is required!"),
            doctor_name: Yup.string().required("Doctor Name is required!"),
            start_time: Yup.string().required("Start Time is required!"),
            end_time: Yup.string()
              .required("End Time is required!")
              .test(
                "is-greater",
                "End Time must be greater than Start Time",
                function (value) {
                  const { start_time } = this.parent;
                  return start_time && value && value > start_time;
                }
              ),
            date: Yup.date().required("Date is required!"),
          })}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="bg-light p-4 rounded">
              <Input
                label="Service"
                name="service"
                onChange={(value: string) => setFieldValue("service", value)}
                type="text"
              />
              <Input
                label="Doctor Name"
                name="doctor_name"
                onChange={(value: string) =>
                  setFieldValue("doctor_name", value)
                }
                type="text"
              />
              <Input
                label="Start Time"
                name="start_time"
                onChange={(value: string) => setFieldValue("start_time", value)}
                type="time"
              />
              <Input
                label="End Time"
                name="end_time"
                onChange={(value: string) => setFieldValue("end_time", value)}
                type="time"
              />
              <Input
                label="Date"
                name="date"
                onChange={(value: string) => setFieldValue("date", value)}
                type="date"
              />
              <button
                type="submit"
                className="btn btn-primary mt-3"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
