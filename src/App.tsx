import { GitBranch, Inbox, MessageCircle, PlaneIcon } from "lucide-react";
import "./App.css";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="flex justify-center items-center h-screen p-4 bg-zinc-100 gap-4 flex-col">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Avatar className="size-16">
              <AvatarImage src="/ultrajam/avatar.jpeg" />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <div className="flex gap-2 flex-col">
              <h1 className="text-lg font-normal">Sergey Gamuylo</h1>
              <p className="text-sm text-zinc-500 font-light">
                Frontend Developer, 20 y. o.
              </p>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Inbox size={16} />
            <h2 className="text-lg font-normal">Projects</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>
              <ProjectCard
                title="uptask"
                description="Modern task manager for the real folks"
                link="https://up-task.ru"
              />
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <MessageCircle size={16} />
            <h2 className="text-lg font-normal">Socials</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button variant={"secondary"} asChild>
            <Link to="https://github.com/ehlvg" target="_blank">
              <GitBranch size={16} />
              GitHub
            </Link>
          </Button>
          <Button variant={"secondary"} asChild>
            <Link to="https://t.me/UltraJamOF" target="_blank">
              <PlaneIcon size={16} />
              Telegram
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

export function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Card className="bg-zinc-50">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="m-0 p-0">
          <Link target="_blank" to={link} className="flex items-center gap-2">
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default App;
