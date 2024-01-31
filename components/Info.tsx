const Info = () => {
  return (
    <section className="text-off-black dark:text-off-white my-12 flex flex-col justify-between sm:my-24 md:flex-row">
      <div className="flex w-full flex-col gap-4 sm:max-w-2xl">
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

      <div className="mt-12 self-end whitespace-nowrap text-xs md:mt-auto">
        Scroll down ↓
      </div>
    </section>
  );
};

export default Info;
