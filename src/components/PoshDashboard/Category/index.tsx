"use client";
import AddCategoryModal from "@/components/shared/AddCategoryModal";
import type { TableColumnsType, TableProps } from "antd";
import { Button, Table } from "antd";
import React, { useState } from "react";
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

const Category = () => {
  const [addOpenModal, setAddOpenModal] = useState(false);
  return (
    <div>
      <div className="flex justify-end mb-10">
        <Button
          onClick={() => setAddOpenModal(true)}
          className="!bg-cyan-500 flex justify-center items-center"
          size="large"
          type="primary"
          icon={<IoIosAdd className="text-xl text-white" />}
        >
          Add Category
        </Button>
      </div>

      <Table columns={columns} onChange={onChange} />

      {addOpenModal && (
        <AddCategoryModal isOpen={addOpenModal} setOpen={setAddOpenModal} />
      )}
    </div>
  );
};

export default Category;
