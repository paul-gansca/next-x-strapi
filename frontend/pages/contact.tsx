import ContactForm from "../components/contactForm";
import Seo from "../components/seo";

const Contact = () => {
  const seo = {
    metaTitle: "Contact",
    metaDescription: `Contact our firm for any questions or issues`,
    shareImage: "imageUrl",
  };
  return (
    <div className="flex h-[calc(100vh-80px-3rem)] items-center">
      <Seo seo={seo} />
      <div className="p-4 w-full max-w-[700px] m-[auto] bg-white rounded-lg border shadow-md sm:p-8 md:p-11">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
