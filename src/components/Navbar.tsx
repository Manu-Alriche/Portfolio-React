import { useState } from "react";
import CvModal from "./Modal/CvModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);
  const CV_URL = "/CV_Professionnel.pdf";

  const handleDownloadCv = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(CV_URL);
      if (!res.ok) throw new Error("Fichier introuvable");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Emmanuel_Alriche_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      window.open(CV_URL, "_blank");
    }
  };

  const links = [
    {
      label: "CV",
      icon: "fa-solid fa-file-arrow-down",
      onClick: (e) => {
        e.preventDefault();
        setShowCvModal(true);
      },
    },
    {
      href: "https://github.com/Manu-Alriche",
      label: "Github",
      icon: "fa-brands fa-github",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/emmanuel-alriche/",
      label: "Linkedin",
      icon: "fa-brands fa-linkedin",
      external: true,
    },
    {
      href: "mailto:e.alriche.dev@gmail.com",
      label: "Email",
      icon: "fa-solid fa-envelope",
    },
  ];

  return (
    <>
      <nav
        className="flex justify-between items-center h-20 px-6 md:px-25 bg-base-100 shadow-sm"
        aria-label="Navigation principale"
      >
        {/* Logo / Nom */}
        <h1 className="bg-base-100 text-xl font-semibold">
          {/* Developpeur React / Django */}
          Developpeur Javascript
        </h1>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center bg-base-100">
          {links.map(({ href, label, icon, external, onClick }) => (
            <a
              key={label}
              href={href || "#"}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              onClick={onClick}
              className="mx-2.5 flex items-center gap-1 px-3 py-1 rounded-md transition-all duration-200 hover:bg-[#1a1c20] hover:text-[#eeeff1]"
            >
              <i className={icon}></i>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Bouton burger (mobile) */}
        <button
          className="md:hidden text-2xl bg-base-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir ou fermer le menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-base-100 shadow-md flex flex-col items-center py-4 md:hidden animate-fadeIn">
            {links.map(({ href, label, icon, external, onClick }) => (
              <a
                key={label}
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={(e) => {
                  if (onClick) onClick(e);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 bg-base-100 py-2 px-4 w-full text-center hover:bg-[#1a1c20] hover:text-[#eeeff1] transition-all duration-200"
              >
                <i className={icon}></i>
                <span>{label}</span>
              </a>
            ))}
          </div>
        )}
      </nav>

      <CvModal
        isOpen={showCvModal}
        onClose={() => setShowCvModal(false)}
        onDownload={handleDownloadCv}
        cvUrl={CV_URL}
      />
    </>
  );
}

export default Navbar;
