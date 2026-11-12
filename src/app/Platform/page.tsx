import { redirect } from "next/navigation";

// There is no Platform overview page: the five Platform pages are reached from the
// homepage coin's Platform slice, so /Platform sends visitors there.
export default function Platform() {
  redirect("/");
}
