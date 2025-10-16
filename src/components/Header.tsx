import { useTheme } from "../hooks/Theme";

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      id="header"
      className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mb-24 mt-16 px-6 md:px-25 scroll-mt-24"
    >
      {/* --- Texte principal --- */}
      <div className="flex-1 text-center md:text-left md:pr-10">
        <h2 className="text-[38px] md:text-[45px] font-semibold bg-base-100 leading-tight">
          Je suis Emmanuel{" "}
          <button
            id="toggle-theme"
            onClick={toggleTheme}
            aria-label="Changer le thème"
          >
            {theme === "light" ? "👋" : "🌙"}
          </button>
        </h2>

        <p className="mt-4 text-base-content/80 leading-relaxed max-w-4xl mx-auto md:mx-0">
          Passionné par le développement web, je conçois et réalise des sites et
          applications à la fois performants, intuitifs et parfaitement adaptés
          aux besoins de chaque projet. J’accorde une grande importance à la
          qualité du code : propre, optimisé et évolutif. Mon approche combine
          rigueur technique et sens du design pour offrir des expériences
          utilisateur fluides, esthétiques et engageantes. <br />
          Curieux et en constante veille technologique, je m’efforce d’intégrer
          les dernières innovations du web afin de proposer des solutions
          modernes, efficaces et durables. Découvrez ci-dessous mes réalisations
          et projets récents !
        </p>

        {/* --- Liens / CTA --- */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
          {[
            {
              href: "#competences",
              icon: "fa-solid fa-code",
              label: "Compétences",
            },
            {
              href: "#projects",
              icon: "fa-solid fa-folder-open",
              label: "Projets",
            },
            // {
            //   href: "#temoignages",
            //   icon: "fa-solid fa-pen",
            //   label: "Témoignages",
            // },
            {
              href: "#contact",
              icon: "fa-solid fa-envelope",
              label: "Contact",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center border-2 border-[#799cfc] px-3 py-2 rounded-md bg-base-100 transition-all duration-200 hover:text-white hover:bg-[#1a1c20]"
            >
              <i className={icon}></i>
              <span className="ml-2">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* --- Image --- */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          className="w-[250px] md:w-[400px] rounded-full shadow-md object-cover"
          src="/hero.jpg"
          alt="ALRICHE Emmanuel"
        />
      </div>
    </section>
  );
}

export default Header;
