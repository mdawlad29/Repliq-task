"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import PosLayout from "../shared/PosLayout";
const Category = dynamic(() => import("./Category/index"));
const Products = dynamic(() => import("./Products/index"));

const PosDashboard = () => {
  const params = useParams();
  const pathName = params.slug[0];

  const vendorComponents = () => {
    if (pathName === "dashboard") {
      return <p>Dashboard</p>;
    } else if (pathName === "category") {
      return <Category />;
    } else if (pathName === "products") {
      return <Products />;
    }
  };

  return (
    <PosLayout>
      {vendorComponents() ? (
        <>{vendorComponents()}</>
      ) : (
        <p className="text-center text-3xl text-gray-600 m-16">
          Page not found
        </p>
      )}
    </PosLayout>
  );
};

export default PosDashboard;
