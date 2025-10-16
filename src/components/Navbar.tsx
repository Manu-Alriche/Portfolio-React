import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      href: "../images/CV Professionnel.pdf",
      label: "CV",
      icon: "fa-solid fa-file-arrow-down",
      download: true,
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
        {links.map(({ href, label, icon, external, download }) => (
          <a
            key={label}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            {...(download && { download: true })}
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
          {links.map(({ href, label, icon, external, download }) => (
            <a
              key={label}
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              {...(download && { download: true })}
              className="flex items-center gap-2 bg-base-100 py-2 px-4 w-full text-center hover:bg-[#1a1c20] hover:text-[#eeeff1] transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <i className={icon}></i>
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
