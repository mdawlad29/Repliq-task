"use client";
import AddProductModal from "@/components/shared/AddProductModal";
import type { TableColumnsType, TableProps } from "antd";
import { Button } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";

interface DataType {
  key: React.Key;
  title: string;
  action: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "SL",
    dataIndex: "key",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const data = [{}];
const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Products = () => {
  const [addOpenModal, setAddOpenModal] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {data?.length}
      <div className="flex justify-end mb-10">
        <Button
          onClick={() => setAddOpenModal(true)}
          className="!bg-cyan-500 flex justify-center items-center"
          size="large"
          type="primary"
          icon={<IoIosAdd className="text-xl text-white" />}
        >
          Add Product
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="max-w-md bg-white p-8 rounded-md shadow-md"
          >
            <Image
              width={100}
              height={100}
              src=""
              alt="Product Image"
              className="w-full mb-4 rounded-md"
            />

            <h2 className="text-xl font-semibold mb-2">{item?.title}</h2>

            <p className="text-lg font-bold mb-2">${item?.price}</p>

            <p className="text-gray-700 mb-4">
              Your product description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {addOpenModal && (
        <AddProductModal isOpen={addOpenModal} setOpen={setAddOpenModal} />
      )}
    </div>
  );
};

export default Products;
