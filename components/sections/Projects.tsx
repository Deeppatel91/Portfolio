import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS } from "@/lib/data";

export const Projects = () => {
  return (
    <section id="projects" className="container">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-5xl mb-14">
        Projects
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <Card key={idx} className="h-full flex flex-col w-full">
            <Image
              src={project.img}
              alt="project image"
              className="rounded-t-lg object-cover w-full h-[200px]"
              width={300}
              height={200}
            />
            <CardHeader className="flex-1">
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-lg">{project.desc}</CardDescription>
            </CardHeader>

            <CardFooter className="gap-2 mt-auto">
              {project.links.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <Button key={idx} variant={link.type as any} asChild>
                    <Link href={link.url} target="_blank">
                      <p className="flex items-center gap-2">
                        <Icon />
                        {link.title}
                      </p>
                    </Link>
                  </Button>
                );
              })}
            </CardFooter>
          </Card>
        ))}
      </section>
    </section>
  );
};
