import { addPage } from "@/redux/slices/coloringBookSlice";
import type { Dispatch } from "@reduxjs/toolkit";
import type { ChangeEvent } from "react";

async function fileUploadHandler(
  event: ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch
) {
  const files = event.target.files ? Array.from(event.target.files) : null;
  if (!files) throw new Error("List of files is empty.");
  files.forEach(async (file) => {
    const imgUrl = URL.createObjectURL(file);
    dispatch(addPage({ imgUrl })); // Argument of type 'AsyncThunkAction<Page | null, { id: number; imageFile: File; }, AsyncThunkConfig>' is not assignable to parameter of type 'UnknownAction'.ts(2345)
  });
  console.log(event);
}

export default fileUploadHandler;
