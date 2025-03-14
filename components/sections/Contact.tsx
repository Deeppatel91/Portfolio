import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/data";
import { ContactForm } from "../ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="container py-12">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-5xl mb-14">
        Contact
      </h1>

      <section className="md:flex gap-10">
        {/* Contact Form Section */}
        <div className="flex-1 mb-10 md:mb-0">
          <ContactForm />
        </div>

        {/* Links Section */}
        <section className="flex flex-col w-full md:w-[400px] gap-8 mt-10 md:mt-0">
          {LINKS.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link key={idx} href={link.href} target="_blank" className="w-full">
                <Button
                  variant="ghost"
                  className="h-24 w-full md:w-[450px] flex items-center gap-8 shadow-md border-2 border-gray-300 dark:border-gray-600 px-10 py-5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all justify-start"
                >
                  <Icon className="h-12 w-12 text-gray-700 dark:text-gray-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-xl font-semibold">{link.title}</span>
                    <span className="font-normal text-lg text-gray-600 dark:text-gray-400">
                      {link.description}
                    </span>
                  </div>
                </Button>
              </Link>
            );
          })}
        </section>
      </section>
    </section>
  );
};
