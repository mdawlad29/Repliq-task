import { Button, Form, Input } from "antd";
import { FC } from "react";
import ModalLayout from "../ModalLayout";

interface IModalProps {
  isOpen: boolean;
  setOpen: any;
}

type FieldType = {
  title?: string;
  price: number;
  desc: string;
  image: string;
  category: string;
};

const AddProductModal: FC<IModalProps> = ({ isOpen, setOpen }) => {
  const [form] = Form.useForm();
  console.log(form);
  const handleSubmit = (value: any) => {
    console.log(value);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: value?.category,
        price: value?.price,
        description: value?.desc,
        image: value?.image,
        category: value?.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    setOpen(false);
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

          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your price!" }]}
          >
            <Input placeholder="Enter price" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Description"
            name="desc"
            rules={[
              { required: true, message: "Please input your descriptions!" },
            ]}
          >
            <Input placeholder="Write product description" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Image"
            name="image"
            rules={[
              { required: true, message: "Please input your image url!" },
            ]}
          >
            <Input placeholder="Enter your image url" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please input your category!" }]}
          >
            <Input placeholder="Enter your category name" />
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

export default AddProductModal;
