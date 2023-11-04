"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  CodeIcon,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/Conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/Image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/Video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/Music",
    color: "text-emerald-700",
    bgColor: "bg-emerald-700/10",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/Code",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          <span className="text-violet-700">Alawi: </span>
          Your Smart AI Companion
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Empowering Your Life with
          <span className="text-violet-500">
            {" "}
            Artificial Intelligence Innovation{" "}
          </span>
          and
          <span className="text-violet-500"> Supportive Intelligence </span>
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
