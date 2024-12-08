import styles from "./BookSettings.module.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * New component
 *
 */
function BookSettings() {
  return (
    <form className={styles.bookSettings}>
      <div>Print settings</div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Paper width</Label>
        <Input type="number" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Paper height</Label>
        <Input type="number" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="margin">paper_color</Label>
        <Input type="number" id="margin" defaultValue="10" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">PPI</Label>
        <Input type="number" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="margin">Margins</Label>
        <Input type="number" id="margin" defaultValue="10" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Square size</Label>
        <Input type="number" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="margin">grid_text_color</Label>
        <Input type="number" id="margin" defaultValue="10" />
      </div>
      <div>Recoloring</div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">base_palette</Label>
        <Input type="number" id="email" placeholder="Email" />
      </div>
      <div>Generate extra colors</div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="margin">n_extra_colors</Label>
        <Input type="number" id="margin" defaultValue="10" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="margin">color_space</Label>
        <Input type="number" id="margin" defaultValue="10" />
      </div>
    </form>
  );
}

export default BookSettings;
