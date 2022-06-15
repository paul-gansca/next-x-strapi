import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <div className="flex h-[calc(100vh-80px-3rem)] items-center">
      <div className="p-4 w-full max-w-[700px] m-[auto] bg-white rounded-lg border shadow-md sm:p-8 md:p-11">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
