import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section className="text-off-black dark:text-off-white my-12 md:my-24">
      <h1 className="text-4xl font-bold uppercase italic mb-8">Contact</h1>
      <p>Don&apos;t hesitate to get in touch.</p>

      <div className="my-6">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Contact;
