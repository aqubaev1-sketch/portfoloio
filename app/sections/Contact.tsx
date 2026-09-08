import ContactBtn from "@/components/ContactBtn";
import Icon from "@/components/icons/Icon";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

const contactItems = [
  { icon: <FaGithub />, text: "Github", url: "https://github.com/aqubaev1-sketch" },
  {
    icon: <FaLinkedin />,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/%D0%B0%D0%B9%D1%81%D1%83%D0%BB%D1%82%D0%B0%D0%BD-%D0%BA%D1%83%D0%B1%D0%B0%D0%B5%D0%B2-b96ab7434/",
  },
  { icon: <FaXTwitter />, text: "Twitter", url: "https://x.com/aisultah" },
  { icon: <FaMedium />, text: "Medium", url: "https://medium.com/@aisltan" },
  {
    icon: <FaEnvelope />,
    text: "Email",
    url: "mailto:kubaev200303@mail.ru",
  },
  {
    icon: <GrDocumentText />,
    text: "Resume",
    url: "https://docs.google.com/document/d/1kwjqlhGQrTaqWtlNHJLuqvWuDgmmLG7T/edit?usp=sharing&ouid=111097857552862871014&rtpof=true&sd=true",
  },
];

export default function Contact() {
  return (
    <div className="relative w-full px-4 md:px-8">
      <div className="border-border pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="grid w-full grid-cols-6">
        {contactItems.map((contact, index) => {
          let borderClasses = "border-border";
          if (index !== 5) borderClasses += " border-r";
          return (
            <ContactBtn
              key={index}
              icon={<Icon icon={contact.icon} />}
              text={contact.text}
              url={contact.url}
              className={borderClasses}
            />
          );
        })}
      </div>
    </div>
  );
}
