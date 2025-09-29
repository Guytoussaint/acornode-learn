import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Download,
  TrendingUp,
  Users,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw
} from "lucide-react";

const scormMetrics = [
  { title: "Completed Students", value: 90, icon: CheckCircle2, color: "text-success", trend: "+5%" },
  { title: "Passed Students", value: 72, icon: Award, color: "text-success", trend: "+8%" },
  { title: "Failed Students", value: 15, icon: XCircle, color: "text-destructive", trend: "-2%" },
  { title: "Average Score", value: "87%", icon: TrendingUp, color: "text-primary", trend: "+3%" },
];

const scoreDistribution = [
  { range: "0-10%", students: 2, color: "#ef4444" },
  { range: "11-20%", students: 3, color: "#f97316" },
  { range: "21-30%", students: 5, color: "#eab308" },
  { range: "31-40%", students: 8, color: "#84cc16" },
  { range: "41-50%", students: 12, color: "#22c55e" },
  { range: "51-60%", students: 18, color: "#06b6d4" },
  { range: "61-70%", students: 22, color: "#3b82f6" },
  { range: "71-80%", students: 28, color: "#6366f1" },
  { range: "81-90%", students: 35, color: "#8b5cf6" },
  { range: "91-100%", students: 42, color: "#10b981" },
];

const coursePerformance = [
  { course: "React Fundamentals", completed: 45, passed: 42, failed: 3, avgScore: 89, threshold: 70 },
  { course: "JavaScript Advanced", completed: 38, passed: 35, failed: 3, avgScore: 85, threshold: 75 },
  { course: "Python Basics", completed: 52, passed: 48, failed: 4, avgScore: 92, threshold: 70 },
  { course: "Data Structures", completed: 29, passed: 25, failed: 4, avgScore: 82, threshold: 80 },
  { course: "Web Design", completed: 41, passed: 39, failed: 2, avgScore: 88, threshold: 70 },
];

const engagementData = [
  { month: 'Jan', enrollments: 120, completions: 98, avgTime: 45 },
  { month: 'Feb', enrollments: 145, completions: 128, avgTime: 52 },
  { month: 'Mar', enrollments: 189, completions: 156, avgTime: 48 },
  { month: 'Apr', enrollments: 203, completions: 178, avgTime: 55 },
  { month: 'May', enrollments: 234, completions: 201, avgTime: 49 },
  { month: 'Jun', enrollments: 256, completions: 223, avgTime: 53 },
];

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Analytics Dashboard</h2>
          <p className="text-muted-foreground">SCORM Assessment & Student Performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Select defaultValue="all-courses">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Course Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-courses">All Courses</SelectItem>
                <SelectItem value="react">React Fundamentals</SelectItem>
                <SelectItem value="javascript">JavaScript Advanced</SelectItem>
                <SelectItem value="python">Python Basics</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all-groups">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Group Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-groups">All Groups</SelectItem>
                <SelectItem value="group-a">Group A</SelectItem>
                <SelectItem value="group-b">Group B</SelectItem>
                <SelectItem value="group-c">Group C</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Last updated:</span>
              <span className="font-medium">just now</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scormMetrics.map((metric) => (
          <Card key={metric.title} className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {metric.trend} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Score Distribution Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Score Distribution</CardTitle>
            <CardDescription>
              Student performance across score ranges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="range" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  className="text-xs"
                />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Engagement Trends */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>
              Monthly enrollments vs completions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="enrollments" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="completions" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Course Performance Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Course Performance Details</CardTitle>
          <CardDescription>
            Detailed breakdown by course with pass/fail analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium text-muted-foreground">Course Name</th>
                  <th className="pb-3 font-medium text-muted-foreground">Completed</th>
                  <th className="pb-3 font-medium text-muted-foreground">Passed</th>
                  <th className="pb-3 font-medium text-muted-foreground">Failed</th>
                  <th className="pb-3 font-medium text-muted-foreground">Pass Rate</th>
                  <th className="pb-3 font-medium text-muted-foreground">Avg Score</th>
                  <th className="pb-3 font-medium text-muted-foreground">Pass Grade</th>
                  <th className="pb-3 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {coursePerformance.map((course, index) => {
                  const passRate = Math.round((course.passed / course.completed) * 100);
                  const isHighPerforming = passRate >= 85;
                  const isLowPerforming = passRate < 70;

                  return (
                    <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-4 font-medium">{course.course}</td>
                      <td className="py-4">{course.completed}</td>
                      <td className="py-4 text-success">{course.passed}</td>
                      <td className="py-4 text-destructive">{course.failed}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <span className={isLowPerforming ? 'text-destructive' : isHighPerforming ? 'text-success' : 'text-foreground'}>
                            {passRate}%
                          </span>
                          {isLowPerforming && <AlertCircle className="h-4 w-4 text-destructive" />}
                        </div>
                      </td>
                      <td className="py-4">{course.avgScore}%</td>
                      <td className="py-4 text-muted-foreground">{course.threshold}%</td>
                      <td className="py-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}