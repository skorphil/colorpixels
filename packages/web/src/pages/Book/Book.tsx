import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Book.module.css";
import PageSnippet from "@/components/PageSnippet/PageSnippet";
import ImageUploader from "@/components/ImageUploader/ImageUploader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

/**
 * New component
 *
 */
function Book(): ReactElement {
  const coloringBookPages = useSelector(
    (state: RootState) => state.coloringBook.pages
  );
  return (
    <div className={styles.bookPage}>
      <aside className={styles.pageList}>
        <PageSnippet>
          <ImageUploader />
        </PageSnippet>
        {coloringBookPages.map((page) => (
          <PageSnippet imageUrl={page.imgUrl} />
        ))}
        <div>{`${coloringBookPages.length} pages`}</div>
      </aside>
      <section className={styles.pageCanvas}>
        <Outlet />
      </section>
    </div>
  );
}

export default Book;
