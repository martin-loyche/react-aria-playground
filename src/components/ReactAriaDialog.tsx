import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
} from "react-aria-components";
import styles from "./ReactAriaDialog.module.css";

export default function ReactAriaDialog() {
  return (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Modal>
        <Dialog className={styles.dialog}>
          {({ close }) => (
            <>
              <Button onPress={close} className={styles.closeButton}>
                ✕
              </Button>
              <Heading className={styles.heading}>Dialog Title</Heading>

              <p>This is a dialog description.</p>
              <Button onPress={close} className={styles.actionButton}>
                Close
              </Button>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
