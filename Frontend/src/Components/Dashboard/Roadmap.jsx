import { useState } from "react";
import { Plus, Minus, Lock, MoreHorizontal, Check } from "lucide-react";

const LearningRoadmap = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { label: "Total", value: 26, bgColor: "bg-blue-100" },
    { label: "Completed", value: 2, bgColor: "bg-green-100" },
    { label: "Upcoming", value: 23, bgColor: "bg-gray-100" },
  ];

  const courses = [
    {
      title: "Medical Terminology",
      description: "Learn basic medical language for effective communication.",
      status: "completed",
    },
    {
      title: "Pharmacology Basics",
      description: "Learn basic medical language for effective communication.",
      status: "in-progress",
      progress: "00:30",
      isVideo: true,
    },
    {
      title: "Anatomy and Physiology",
      description: "Understand the structure and function of the human body.",
      status: "completed",
    },
    {
      title: "Medical Ethics and Professionalism",
      description:
        "Understand ethical principles and professionalism in healthcare.",
      status: "upcoming",
      isLocked: true,
    },
    {
      title: "Disease Pathophysiology",
      description: "Study the cellular and molecular basis of common diseases.",
      status: "upcoming",
      isLocked: true,
    },
  ];

  const handlePlay = (course) => {
    console.log(`Playing video for: ${course.title}`);
  };

  return (
    <div className="max-w-2xl p-4 bg-[#FFFCF1] rounded-xl ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Roadmap</h1>
        <h1 className="font-bold text-2xl cursor-pointer transition-transform duration-200 hover:scale-110">
          <i className="ri-play-fill"></i>
        </h1>
      </div>

      <div className="flex gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bgColor} p-4 rounded-xl flex-1`}
          >
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={course.title}
            className="relative bg-[#F7F3E3] rounded-lg shadow-sm p-4"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {index > 0 && (
              <div className="absolute -top-4 left-8 w-0.5 h-4 bg-gray-200" />
            )}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{course.title}</h3>
                  {course.status === "completed" && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      Completed <Check className="w-3 h-3" />
                    </span>
                  )}
                  {course.status === "upcoming" && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      Upcoming
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{course.description}</p>
                {course.isVideo && course.progress && hoveredCard === index && (
                  <div className="mt-2 flex items-center gap-2">
                    <button className="p-2 rounded-full" onClick={() => handlePlay(course)}>
                      <h1 className="font-bold text-2xl cursor-pointer transition-transform duration-200 hover:scale-110">
                        <i className="ri-play-fill"></i>
                      </h1>
                    </button>
                    <span className="text-xs text-gray-500">
                      Watching {course.progress}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
                {course.isLocked ? (
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Lock className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50">
          <Plus className="w-4 h-4" />
        </button>
        <button className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50">
          <Minus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default LearningRoadmap;