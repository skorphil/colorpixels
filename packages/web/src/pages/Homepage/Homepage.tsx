import { Outlet } from "react-router-dom";
import styles from "./Homepage.module.css";
import BookSettings from "@/components/BookSettings/BookSettings";
import AppHeader from "@/components/AppHeader/AppHeader";

/**
 * New component
 *
 */
function Homepage() {
  return (
    <>
      <aside className={styles.sidebar}>
        <AppHeader />
        <BookSettings />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Homepage;
