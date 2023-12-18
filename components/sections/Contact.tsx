import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-8 px-4">
      <h2 id="skills" className="text-5xl font-extrabold">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <span className="md:w-1/2">
          <h3 className="text-2xl font-extrabold">
            Need a frontend developer?
          </h3>
          <p className="text-lg mt-4">
            Contact me through this form, I am interested in hearing about you,
            knowing your ideas and contributing to your projects with my work.
          </p>
        </span>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
