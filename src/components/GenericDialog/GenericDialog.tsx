import {
  createContext,
  useContext,
  type ComponentProps,
  type ReactNode,
} from "react";
import {
  Button,
  DialogTrigger,
  Modal,
  Dialog as ReactAriaDialog,
} from "react-aria-components";

export const DialogRoot = DialogTrigger;

interface DialogProps extends ComponentProps<typeof ReactAriaDialog> {
  children: ReactNode;
}

export const DialogContainer = ({ children, ...rootProps }: DialogProps) => {
  return (
    <Modal>
      <ReactAriaDialog {...rootProps}>
        {({ close }) => (
          <DialogContext.Provider value={{ close }}>
            {children}
          </DialogContext.Provider>
        )}
      </ReactAriaDialog>
    </Modal>
  );
};

export const DialogCloseButton = ({
  onPress,
  ...rest
}: ComponentProps<typeof Button>) => {
  const { close } = useDialogContext();

  return (
    <Button
      {...rest}
      onPress={(e) => {
        onPress?.(e);
        close();
      }}
      style={{
        background: "black",
        color: "white",
        padding: 8,
        borderRadius: 4,
        display: "grid",
        placeItems: "center",
      }}
    >
      X
    </Button>
  );
};

const DialogContext = createContext<{ close: () => void } | null>(null);
export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (context) {
    return context;
  } else {
    throw new Error("DialogContext not found");
  }
};
