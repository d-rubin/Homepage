import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col gap-8 px-4">
      <div className="w-full flex items-center justify-center relative">
        <div className="w-full flex items-center justify-end">
          <div className="rounded border-t-4 border-red w-full" />
        </div>
        <h2 className="text-5xl font-extrabold w-fit px-8">Contact</h2>
        <div className="rounded w-full border-t-4 border-red" />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <span className="md:w-1/2">
          <h3 className="text-2xl font-extrabold md:mt-1">
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
