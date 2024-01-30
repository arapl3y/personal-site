const Info = () => {
  return (
    <section className="my-24 flex justify-between">
      <div className="flex max-w-xl flex-col gap-4">
        <p>
          I&apos;m currently Lead Product Engineer at{" "}
          <a href="https://futurefriendly.team" className="underline">
            Future Friendly
          </a>{" "}
          — focused on developing products that improve people&apos;s everyday
          lives.
        </p>

        <div>
          <p>
            Over the years I&apos;ve worked on projects large and small,
            production and prototype for organisations across Government,
            Education, Finance, Environment and Health.
          </p>

          <p className="my-4">I specialise in:</p>
          <ul className="ml-4 flex flex-col gap-2">
            <li>∙ Full-stack development</li>
            <li>∙ Creative technology</li>
            <li>∙ Motion design</li>
          </ul>
        </div>

        <p>I&apos;m based on Gadigal land in Australia.</p>
      </div>

      <div className="w-fit self-end whitespace-nowrap text-xs">
        Scroll down ↓
      </div>
    </section>
  );
};

export default Info;
