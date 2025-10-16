import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState(""); // Texte du toast
  const [visible, setVisible] = useState(false); // Affichage

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_16r6rn9", // 🔧 Ton service ID
        "contact_template", // 🔧 Ton template ID
        form.current,
        "skb9xejlZMCyULeg8" // 🔧 Ta clé publique EmailJS
      );

      setMessage("✅ Message envoyé avec succès !");
      setVisible(true);

      form.current.reset();

      // Masquer le message après 3 secondes
      setTimeout(() => setVisible(false), 3000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Une erreur est survenue.");
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="mb-24 px-6 md:px-12 py-0 scroll-mt-24 relative"
    >
      {/* --- Message flottant --- */}
      {visible && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#799cfc] text-white px-6 py-3 rounded-md shadow-lg z-50">
          {message}
        </div>
      )}
      <h2 className="text-center text-[35px] font-semibold mb-10 bg-base-100">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* --- Texte d'intro --- */}
        <div className="flex-1 text-base-content/80 text-base leading-relaxed">
          Vous souhaitez collaborer sur un projet web, avez une idée à
          concrétiser ou simplement envie d'échanger ?<br />
          Je suis toujours ouvert aux nouvelles opportunités, qu'il s'agisse de
          développement front-end, back-end ou de création de sites sur mesure.
          <br />
          Remplissez le formulaire ci-dessous et je vous répondrai rapidement.
        </div>

        {/* --- Formulaire --- */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 flex flex-col gap-4"
        >
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Votre nom"
            required
            className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#799cfc]"
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Votre email"
            required
            className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#799cfc]"
          />

          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            rows={6}
            required
            className="border-2 border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#799cfc]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#799cfc] text-white rounded-md py-3 mt-2 hover:bg-[#1a1c20] transition-colors duration-200"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
