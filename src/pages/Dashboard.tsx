import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { DashboardOverview } from "@/components/Dashboard/DashboardOverview";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <DashboardOverview />
    </DashboardLayout>
  );
}