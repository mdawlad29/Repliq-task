import { Modal } from "antd";
import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalLayoutI {
  isOpen: boolean;
  closeModal?: any;
  children: any;
  width?: number;
  className?: string;
  isHeaderNone?: boolean;
}

const ModalLayout: FC<ModalLayoutI> = ({
  isOpen,
  closeModal,
  children,
  width,
}) => {
  return (
    <Modal
      title=""
      width={width}
      open={isOpen}
      footer={null}
      centered={true}
      closable={false}
      onOk={() => closeModal()}
      // onCancel={() => closeModal()}
    >
      <div
        className="flex justify-end cursor-pointer mb-4"
        onClick={closeModal}
      >
        <AiOutlineClose className="text-[20px] hover:text-red-600 duration-300 ease-in-out text-[#CFCFCF]" />
      </div>

      {children}
    </Modal>
  );
};

export default ModalLayout;
