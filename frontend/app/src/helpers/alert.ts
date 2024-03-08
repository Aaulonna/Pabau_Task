import { TypeOptions, toast } from "react-toastify";

export const alert = (message: string, type?: TypeOptions) =>
toast(message, { type: type ?? "default" });