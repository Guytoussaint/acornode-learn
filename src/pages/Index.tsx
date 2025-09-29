import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const featuresData = [
  {
    icon: BookOpen,
    title: "Course Management",
    description: "Create, organize, and manage your courses with our intuitive course builder",
    href: "/courses"
  },
  {
    icon: Users,
    title: "Student Analytics", 
    description: "Track student progress, engagement, and performance with detailed analytics",
    href: "/students"
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description: "Generate comprehensive reports with SCORM assessment tracking",
    href: "/analytics"
  },
  {
    icon: Play,
    title: "Interactive Learning",
    description: "Deliver engaging content with video lessons, quizzes, and assignments",
    href: "/learning"
  }
];

const statsData = [
  { label: "Active Courses", value: "24", change: "+12%" },
  { label: "Total Students", value: "1,847", change: "+23%" },
  { label: "Completion Rate", value: "87%", change: "+5%" },
  { label: "Monthly Revenue", value: "$12,459", change: "+18%" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-white">LearnHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              The complete Learning Management System for creating, delivering, and tracking online courses with advanced SCORM support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
                <Link to="/">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                <Link to="/learning">
                  Preview Learning Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mb-1">{stat.label}</div>
                <div className="text-success text-sm flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Online Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From course creation to student analytics, LearnHub provides all the tools you need to deliver exceptional learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuresData.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                <Link to={feature.href}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Platform?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of educators and organizations using LearnHub to deliver world-class online learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
              <Link to="/">
                Start Building Courses
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground">LearnHub</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 LearnHub. Built with modern web technologies.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
