const Info = () => {
  return (
    <section className="mb-30 mt-16 flex justify-between text-xl lg:mb-60 lg:mt-32">
      <div className="flex max-w-4xl flex-col gap-8">
        <p>
          I&apos;m currently Lead Product Engineer at{" "}
          <a href="https://futurefriendly.team">Future Friendly</a>, focused on
          building high quality products that improve people&apos;s everyday
          lives.
        </p>

        <div>
          <p>
            Over the years I&apos;ve worked on many projects large and small,
            production and prototype for organisations across Government,
            Education, Finance and Health.
          </p>

          <p className="my-8">I specialise in:</p>
          <ul className="ml-4 flex flex-col gap-4">
            <li>— Full-stack development</li>
            <li>— Creative technology</li>
            <li>— Motion design</li>
          </ul>
        </div>
        <p>I&apos;m based on Gadigal land in Australia.</p>
      </div>

      <div className="self-end text-sm">Scroll down ↓</div>
    </section>
  );
};

export default Info;
