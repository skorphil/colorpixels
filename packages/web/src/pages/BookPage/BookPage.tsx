import { ReactElement } from "react";
import styles from "./BookPage.module.css";

/**
 * New component
 *
 */
function BookPage(): ReactElement {
  return (
    <div className={styles.canvas}>
      <div>Its a book page</div>
    </div>
  );
}

export default BookPage;
