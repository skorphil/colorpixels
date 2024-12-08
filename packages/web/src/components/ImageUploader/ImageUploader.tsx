import fileUploadHandler from "@/components/ImageUploader/components/fileUploadHandler";
import styles from "./ImageUploader.module.css";
import { useDispatch } from "react-redux";
import type { ReactElement } from "react";

/**
 * New component
 *
 */
function ImageUploader(): ReactElement {
  // const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className={styles.imageUploader}>
      <input
        type="file"
        multiple
        onChange={(e) => fileUploadHandler(e, dispatch)}
      ></input>
    </div>
  );
}

export default ImageUploader;
