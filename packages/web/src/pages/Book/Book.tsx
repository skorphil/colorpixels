import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Book.module.css";
import PageSnippet from "@/components/PageSnippet/PageSnippet";

/**
 * New component
 *
 */
function Book(): ReactElement {
  return (
    <div className={styles.bookPage}>
      <aside className={styles.pageList}>
        <PageSnippet />
        <PageSnippet horizontal />
        <PageSnippet />
        <PageSnippet />
      </aside>
      <section className={styles.pageCanvas}>
        <Outlet />
      </section>
    </div>
  );
}

export default Book;
