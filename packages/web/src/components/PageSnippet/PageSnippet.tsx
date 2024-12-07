import styles from "./PageSnippet.module.css";

import type { ReactElement } from "react";

type PageSnippetProps = {
  horizontal?: boolean;
};

// TODO addnewpage variant

/**
 * Shows preview of a page in a book pages list
 *
 */
function PageSnippet(props: PageSnippetProps): ReactElement {
  return (
    <div
      className={`${styles.pagePreview} ${
        props.horizontal ? styles.horizontal : styles.vertical
      }`}
    >
      <img src="https://i.pinimg.com/736x/fa/c2/ab/fac2abb69ff8503d184be8d5417ea650.jpg"></img>
    </div>
  );
}

export default PageSnippet;
