import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award,
  Play,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const statsData = [
  {
    title: "Total Courses",
    value: "24",
    change: "+12%",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Active Students", 
    value: "1,847",
    change: "+23%",
    icon: Users,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Course Completion",
    value: "87%",
    change: "+5%",
    icon: CheckCircle,
    color: "text-success", 
    bgColor: "bg-success/10",
  },
  {
    title: "Revenue",
    value: "$12,459",
    change: "+18%",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const recentCourses = [
  {
    id: 1,
    title: "React Development Fundamentals",
    instructor: "Sarah Johnson",
    students: 234,
    completion: 92,
    status: "Published",
    thumbnail: "🚀"
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts", 
    instructor: "Mike Chen",
    students: 189,
    completion: 78,
    status: "Published",
    thumbnail: "⚡"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Emma Davis",
    students: 156,
    completion: 85,
    status: "Draft",
    thumbnail: "🎨"
  },
];

const recentActivities = [
  {
    id: 1,
    type: "enrollment",
    message: "25 new students enrolled in React Development",
    time: "2 hours ago",
    icon: Users
  },
  {
    id: 2,
    type: "completion",
    message: "Course 'JavaScript Basics' reached 90% completion rate",
    time: "4 hours ago", 
    icon: Award
  },
  {
    id: 3,
    type: "new_course",
    message: "New course 'Python for Beginners' was published",
    time: "1 day ago",
    icon: BookOpen
  },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <Card key={stat.title} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Courses */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Popular Courses
            </CardTitle>
            <CardDescription>
              Your top performing courses this month
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                <div className="text-2xl">{course.thumbnail}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {course.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    by {course.instructor}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {course.students}
                    </span>
                    <div className="flex-1 max-w-[100px]">
                      <Progress value={course.completion} className="h-1" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {course.completion}%
                    </span>
                  </div>
                </div>
                <Badge 
                  variant={course.status === "Published" ? "default" : "secondary"}
                  className={course.status === "Published" ? "bg-success text-success-foreground" : ""}
                >
                  {course.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest updates from your learning platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <activity.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {activity.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Activity
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks to get you started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-auto p-6 flex-col gap-2 bg-gradient-primary hover:opacity-90">
              <BookOpen className="h-6 w-6" />
              Create New Course
            </Button>
            <Button variant="outline" className="h-auto p-6 flex-col gap-2">
              <Users className="h-6 w-6" />
              Manage Students  
            </Button>
            <Button variant="outline" className="h-auto p-6 flex-col gap-2">
              <Play className="h-6 w-6" />
              Preview Course
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}