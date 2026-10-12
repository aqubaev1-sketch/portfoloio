import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ConnectBtn from "@/components/ConnectBtn";
import Heading from "@/components/Heading";

const connectHandle = [
  {
    icon: <FaXTwitter />,
    title: "X",
    href: "https://x.com/aisultah",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/aqubaev1-sketch",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    href: "mailto:kubaev200303@mail.ru",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/%D0%B0%D0%B9%D1%81%D1%83%D0%BB%D1%82%D0%B0%D0%BD-%D0%BA%D1%83%D0%B1%D0%B0%D0%B5%D0%B2-b96ab7434/",
  },
];

export default function Connect() {
  return (
    <>
      <Heading title="Work With Me" />
      <div className="relative w-full px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-3xl p-4 text-center md:p-8">
          <h2 className="font-heading mb-1 text-2xl font-medium tracking-wide md:text-3xl">
            Есть идея для проекта?
          </h2>
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
            Не стесняйтесь связываться со мной через любую из этих платформ
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-2 sm:flex-wrap sm:gap-3">
            {connectHandle.map((handle, idx) => (
              <ConnectBtn
                key={idx}
                title={handle.title}
                icon={handle.icon}
                href={handle.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
