import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { CourseManagement } from "@/components/Courses/CourseManagement";

export default function Courses() {
  return (
    <DashboardLayout title="Courses">
      <CourseManagement />
    </DashboardLayout>
  );
}