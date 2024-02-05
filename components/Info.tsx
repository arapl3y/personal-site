const Info = () => {
  return (
    <section className="text-off-black dark:text-off-white mt-12 md:mt-24 flex w-full max-w-4xl flex-col gap-4">
      <p>
        Lead Product Engineer at{" "}
        <a href="https://futurefriendly.team" className="underline">
          Future Friendly
        </a>
        , based on Gadigal land in Australia — focused on developing products
        that improve people&apos;s everyday lives.
      </p>

      <div>
        <p>
          Working on large, small, production and prototype projects for
          organisations across Government, Education, Finance, Environment and
          Health.
        </p>

        <p className="my-4">Specialising in:</p>
        <ul className="ml-2 flex flex-col">
          <li>⭢ Full-stack development</li>
          <li>⭢ Creative technology</li>
          <li>⭢ Motion design</li>
        </ul>
      </div>
    </section>
  );
};

export default Info;
