import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  Maximize,
  CheckCircle,
  Circle,
  Clock,
  FileText,
  HelpCircle,
  Download,
  ArrowLeft,
  ArrowRight,
  Search,
  BookOpen
} from "lucide-react";

const courseData = {
  title: "Complete React Development Course",
  progress: 58,
  currentLesson: {
    id: 4,
    title: "State Management with Hooks",
    type: "video",
    duration: "12:35",
    videoUrl: "/videos/lesson-4.mp4"
  }
};

const curriculum = [
  {
    id: 1,
    title: "Getting Started",
    completed: 3,
    total: 3,
    expanded: true,
    lessons: [
      { id: 1, title: "Course Introduction", type: "video", duration: "< 5 MIN", completed: true },
      { id: 2, title: "Setting up Development Environment", type: "video", duration: "< 10 MIN", completed: true },
      { id: 3, title: "Your First React App", type: "video", duration: "< 15 MIN", completed: true }
    ]
  },
  {
    id: 2,
    title: "React Fundamentals",
    completed: 1,
    total: 4,
    expanded: true,
    lessons: [
      { id: 4, title: "State Management with Hooks", type: "video", duration: "< 15 MIN", completed: false, current: true },
      { id: 5, title: "Props and Components", type: "video", duration: "< 20 MIN", completed: false },
      { id: 6, title: "Event Handling", type: "video", duration: "< 12 MIN", completed: false },
      { id: 7, title: "Quiz: React Basics", type: "quiz", duration: "5 questions", completed: false }
    ]
  },
  {
    id: 3,
    title: "Advanced Concepts",
    completed: 0,
    total: 5,
    expanded: false,
    lessons: [
      { id: 8, title: "Context API", type: "video", duration: "< 18 MIN", completed: false },
      { id: 9, title: "Custom Hooks", type: "video", duration: "< 25 MIN", completed: false },
      { id: 10, title: "Performance Optimization", type: "video", duration: "< 30 MIN", completed: false },
      { id: 11, title: "Assignment: Build a Todo App", type: "assignment", duration: "Submit file", completed: false },
      { id: 12, title: "Final Project Review", type: "text", duration: "< 10 MIN", completed: false }
    ]
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return <Play className="h-3 w-3" />;
    case "quiz":
      return <HelpCircle className="h-3 w-3" />;
    case "assignment":
      return <FileText className="h-3 w-3" />;
    case "text":
      return <BookOpen className="h-3 w-3" />;
    default:
      return <Circle className="h-3 w-3" />;
  }
};

export function CoursePlayer() {
  const [expandedChapters, setExpandedChapters] = useState<number[]>([1, 2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const filteredCurriculum = curriculum.map(chapter => ({
    ...chapter,
    lessons: chapter.lessons.filter(lesson => 
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(chapter => chapter.lessons.length > 0 || searchTerm === "");

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Course Navigation */}
      <div className="w-80 border-r bg-card flex flex-col">
        {/* Course Header */}
        <div className="p-4 border-b">
          <Button variant="ghost" size="sm" className="mb-3 p-0 h-auto text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go to Dashboard
          </Button>
          <h1 className="font-semibold text-lg mb-2">{courseData.title}</h1>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{courseData.progress}% complete</span>
            </div>
            <Progress value={courseData.progress} className="h-2" />
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by lesson title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="video">Videos</SelectItem>
              <SelectItem value="quiz">Quizzes</SelectItem>
              <SelectItem value="assignment">Assignments</SelectItem>
              <SelectItem value="text">Reading</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Curriculum */}
        <div className="flex-1 overflow-y-auto">
          {filteredCurriculum.map((chapter) => (
            <div key={chapter.id} className="border-b">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  {expandedChapters.includes(chapter.id) ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                  <div>
                    <div className="font-medium text-sm">{chapter.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {chapter.completed}/{chapter.total} completed
                    </div>
                  </div>
                </div>
                {chapter.completed === chapter.total && (
                  <CheckCircle className="h-4 w-4 text-success" />
                )}
              </button>

              {expandedChapters.includes(chapter.id) && (
                <div className="bg-muted/20">
                  {chapter.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className={`w-full p-3 pl-8 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left border-l-2 ${
                        lesson.current 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : 'border-transparent'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{lesson.title}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          {getTypeIcon(lesson.type)}
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Lesson Header */}
        <div className="p-6 border-b bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1">
                Lesson {courseData.currentLesson.id}: {courseData.currentLesson.title}
              </h2>
              <div className="text-sm text-muted-foreground">
                React Fundamentals → State Management
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Maximize className="mr-2 h-4 w-4" />
              Fullscreen
            </Button>
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 bg-black flex items-center justify-center relative">
          <div className="w-full h-full max-h-[600px] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </div>
              <p className="text-lg mb-2">State Management with Hooks</p>
              <p className="text-white/70">Duration: {courseData.currentLesson.duration}</p>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-4 text-white">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>

              <div className="flex-1">
                <Progress value={25} className="h-1 bg-white/20" />
              </div>

              <div className="text-sm">0:03 / 12:35</div>

              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Volume2 className="h-4 w-4" />
              </Button>

              <Select defaultValue="1x">
                <SelectTrigger className="w-16 h-8 bg-transparent border-white/20 text-white text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5x">0.5x</SelectItem>
                  <SelectItem value="1x">1x</SelectItem>
                  <SelectItem value="1.25x">1.25x</SelectItem>
                  <SelectItem value="1.5x">1.5x</SelectItem>
                  <SelectItem value="2x">2x</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Lesson Actions */}
        <div className="p-6 border-t bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <CheckCircle className="mr-2 h-4 w-4" />
                Mark Complete
              </Button>
              <Button variant="ghost">
                <Download className="mr-2 h-4 w-4" />
                Resources
              </Button>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}