import dynamic from "next/dynamic";
const PosDashboard = dynamic(() => import("@/components/PoshDashboard"));

export default function Dashboard() {
  return <PosDashboard />;
}
