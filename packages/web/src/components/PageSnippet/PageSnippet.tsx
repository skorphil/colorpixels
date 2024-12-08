import styles from "./PageSnippet.module.css";

import type { ReactElement } from "react";

type PageSnippetProps = {
  horizontal?: boolean;
  children?: ReactElement;
  imageUrl?: string;
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
      {props.children || <img src={props.imageUrl}></img>}
    </div>
  );
}

export default PageSnippet;
