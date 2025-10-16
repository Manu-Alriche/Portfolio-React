function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-3 py-6 border-t border-gray-200 text-sm text-base-content/80 bg-base-100">
      <div className="flex gap-4 text-xl">
        <a
          href="https://github.com/Manu-Alriche"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-base-100 transition-colors duration-200"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-alriche/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-base-100 transition-colors duration-200"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:e.alriche.dev@gmail.com"
          className="hover:bg-base-100 transition-colors duration-200"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>

      <p className="text-center text-base-content text-sm">
        © {new Date().getFullYear()} Alriche Emmanuel — Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;
