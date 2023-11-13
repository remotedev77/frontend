import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";

interface UserDialogProps extends PropsWithChildren {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
}

export const UserDialog: FC<UserDialogProps> = observer((x) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [, setModalOpen] = useState(x.isOpen);
  useEffect(() => {
    setModalOpen(x.isOpen);
  }, [x.isOpen]);

  return (
    <dialog ref={modalRef} className="modal">
      {x.children}
    </dialog>
  );
});
