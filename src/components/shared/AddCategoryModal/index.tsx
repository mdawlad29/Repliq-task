import { Button, Form, Input } from "antd";
import { FC } from "react";
import ModalLayout from "../ModalLayout";

interface IModalProps {
  isOpen: boolean;
  setOpen: any;
}

type FieldType = {
  category?: string;
};

const AddCategoryModal: FC<IModalProps> = ({ isOpen, setOpen }) => {
  const handleSubmit = (value: any) => {
    console.log(value);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: value.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalLayout isOpen={isOpen} closeModal={handleClose} width={600}>
      <div>
        <Form
          name="basic"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Enter category name" />
          </Form.Item>

          <Form.Item className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="!bg-cyan-500 !w-[160px] "
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ModalLayout>
  );
};

export default AddCategoryModal;
