import styles from "./AppHeader.module.css";
import { Download, CircleHelp } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * New component
 *
 */
function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <div className={styles.heading}>Color Pixels</div>
      <div>
        <Button variant="outline" size="icon">
          <Download size={32} />
        </Button>
        <Button variant="outline" size="icon">
          <CircleHelp size={32} />
        </Button>
      </div>
    </div>
  );
}

export default AppHeader;
