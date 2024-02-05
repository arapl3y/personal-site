export default function SocialLinks({ ...props }) {
  const links = [
    {
      href: "mailto:rapley3@gmail.com",
      text: "Email",
    },
    {
      href: "//www.linkedin.com/in/alex-rapley-7a00b159/",
      text: "LinkedIn",
    },
    {
      href: "//github.com/arapl3y",
      text: "GitHub",
    },
    {
      href: "//twitter.com/arapl3y",
      text: "Twitter",
    },
  ];

  return (
    <ul className="flex gap-4" {...props}>
      {links.map((link) => (
        <a
          key={link.text}
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
          className="text-off-black dark:text-off-white uppercase underline"
        >
          {link.text}
        </a>
      ))}
    </ul>
  );
}
