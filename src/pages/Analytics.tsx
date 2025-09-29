import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { AnalyticsDashboard } from "@/components/Analytics/AnalyticsDashboard";

export default function Analytics() {
  return (
    <DashboardLayout title="Analytics">
      <AnalyticsDashboard />
    </DashboardLayout>
  );
}