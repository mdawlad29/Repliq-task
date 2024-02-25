"use client";
import { useParams } from "next/navigation";
import PosLayout from "../shared/PosLayout";

const PosDashboard = () => {
  const params = useParams();
  const pathName = params.slug[0];

  const vendorComponents = () => {
    if (pathName === "dashboard") {
      return <p>Dashboard</p>;
    } else if (pathName === "category") {
      return <p>Dashboard</p>;
    } else if (pathName === "products") {
      return <p>products</p>;
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
