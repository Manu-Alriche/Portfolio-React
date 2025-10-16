function Projets() {
  const projects = {
    frontend: [
      {
        title: "ToDo App",
        image: "../public/assets/Todo.png",
        description: (
          <>
            <strong>React / Typescript / Tailwind CSS</strong>
            <br />
            Une application Todo List permettant d’ajouter et organiser ses
            tâches par priorité. Un design épuré, elle met en avant la gestion
            d’état et l’interactivité.
          </>
        ),
        github: "https://github.com/Manu-Alriche/ToDo-App",
      },
      {
        title: "O'Coffee",
        image: "../public/assets/O'Coffee.png",
        description: (
          <>
            <strong>Node / Express</strong>
            <br />
            Site vitrine O'Coffee, conçu avec une architecture MVC et une base
            de données structurée. Gestion dynamique via un back-end complet.
          </>
        ),
        github: "https://github.com/Manu-Alriche/Projet-OCoffee",
      },
    ],
    backend: [
      {
        title: "Projet Ghibliothèque",
        image: "../public/assets/ghibliotheque.png",
        description: (
          <>
            <strong>Python / Django</strong>
            <br />- Application Express pour explorer l’univers Ghibli
            <br />- Gestion d’une base de données et API REST
            <br />- Gestion d’une base de données et API REST
          </>
        ),
        github: "https://github.com/Manu-Alriche/Projet-OChat",
      },
      {
        title: "Projet O'Chat",
        image: "../public/assets/O'Chat.png",
        description: (
          <>
            <strong>Svelte</strong>
            <br />- Framework : Svelte
            <br />- Backend API : Pocketbase
            <br />- API IA : Mistral AI
          </>
        ),
        github: "https://github.com/Manu-Alriche/Projet-OChat",
      },
    ],
    fullstack: [
      {
        title: "O'Chat",
        image: "../public/assets/O'Chat.png",
        description: (
          <>
            <strong>Svelte</strong>
            <br />
            Une application qui d’interagit avec l’API du LLM Mistral. Elle gère
            les conversations, l’authentification et la persistance des données
            grâce à Pocketbase et LocalStorage.
          </>
        ),
        github: "https://github.com/Manu-Alriche/Projet-OChat",
        lien: "",
      },
      {
        title: "Projet GreenRoots",
        image: "../public/assets/GreenRoots.png",
        description: (
          <>
            <strong>SvelteKit / Express</strong>
            <br />
            Une plateforme e-commerce permettant aux utilisateurs d’acheter des
            arbres à planter afin de participer activement à la reforestation
            mondiale.
          </>
        ),
        github: "https://github.com/Manu-Alriche/GreenRoots",
        lien: "https://greenroots-flax.vercel.app/",
      },
    ],
  };

  return (
    <section id="projects" className="mb-24 px-6 md:px-12 scroll-mt-24">
      <h2 className="text-center text-[35px] font-semibold mb-4 bg-base-100">
        Projets
      </h2>

      <p className="text-center base-content/80 max-w-3xl mx-auto mb-10 leading-relaxed">
        Découvrez mes réalisations réparties par catégorie : front-end, back-end
        et full-stack. Chaque projet illustre mon approche axée sur la qualité
        du code, la performance et l’expérience utilisateur.
      </p>

      {/* Grille des catégories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Frontend */}
        <div className="bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          {/* <h3 className="text-2xl font-semibold text-center text-[#799cfc] mb-4">
            Front-End / Back-End
          </h3> */}
          <div className="flex flex-col gap-6">
            {projects.frontend.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2 bg-base-100">
                    {p.title}
                  </h4>
                  <p className="text-sm text-base-content/80 leading-relaxed mb-3">
                    {p.description}
                  </p>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-3 py-2 border-2 border-[#799cfc] bg-base-100 rounded-md hover:bg-[#1a1c20] hover:text-white transition-all text-sm"
                    >
                      <i className="fa-brands fa-github mr-1"></i>
                      Github
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        {/* <div className="bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          <h3 className="text-2xl font-semibold text-center text-[#799cfc] mb-4">
            Back-End
          </h3>
          <div className="flex flex-col gap-6">
            {projects.backend.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500 ease-outr"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2 bg-base-100">
                    {p.title}
                  </h4>
                  <p className="text-sm text-base-content/80 leading-relaxed mb-3">
                    {p.description}
                  </p>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-3 py-2 border-2 border-[#799cfc] bg-base-100 rounded-md hover:bg-[#1a1c20] hover:text-white transition-all text-sm"
                    >
                      <i className="fa-brands fa-github mr-1"></i>
                      Github
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Fullstack */}
        <div className="bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          {/* <h3 className="text-2xl font-semibold text-center text-[#799cfc] mb-4">
            Full-Stack
          </h3> */}
          <div className="flex flex-col gap-6">
            {projects.fullstack.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2 bg-base-100">
                    {p.title}
                  </h4>
                  <p className="text-sm text-base-content/80 leading-relaxed mb-3">
                    {p.description}
                  </p>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-3 py-2 border-2 border-[#799cfc] bg-base-100 rounded-md hover:bg-[#1a1c20] hover:text-white transition-all text-sm"
                    >
                      <i className="fa-brands fa-github mr-1"></i>
                      Github
                    </a>
                  )}
                  <a
                    href={p.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 ml-2 px-3 py-2 border-2 border-[#799cfc] bg-base-100 rounded-md hover:bg-[#1a1c20] hover:text-white transition-all text-sm"
                  >
                    <i className="fa-solid fa-globe mr-1"></i>
                    Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projets;
