import { Outlet } from "react-router-dom";
import styles from "./Homepage.module.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * New component
 *
 */
function Homepage() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.heading}>Color Pixels</div>
        <form className={styles.bookSettings}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Paper size</Label>
            <Input type="number" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="margin">Margin</Label>
            <Input type="number" id="margin" defaultValue="10" />
          </div>
        </form>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Homepage;
