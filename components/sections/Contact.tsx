import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-8 px-4">
      <h2 id="skills" className="text-5xl font-extrabold">
        Contact
      </h2>
      <h3 className="text-2xl font-extrabold">Need a frontend developer?</h3>
      <p className="text-lg">
        Contact me through this form, I am interested in hearing about you,
        knowing your ideas and contributing to your projects with my work.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
