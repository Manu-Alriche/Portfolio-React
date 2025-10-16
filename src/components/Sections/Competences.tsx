function Competences() {
  const skills = [
    { name: "React", src: "competences/react-logo.webp" },
    { name: "Typescript", src: "competences/Typescript-logo.png" },
    { name: "JavaScript", src: "competences/javascript-logo.webp" },
    { name: "Tailwind CSS", src: "competences/tailwind-css-logo.png" },
    { name: "Nextjs", src: "competences/nextjs-logo.png" },
    // { name: "Python", src: "competences/python-logo.png" },
    // { name: "Django", src: "competences/django-logo.png" },
    { name: "Node.js", src: "competences/node-logo.webp" },
    { name: "Express", src: "competences/express-js.svg" },
    { name: "PostgreSQL", src: "competences/Postgresql.svg" },
  ];

  return (
    <section id="competences" className="mb-24 px-6 md:px-12 py-0 scroll-mt-24">
      {/* --- Titre --- */}
      <h2 className="text-center text-[35px] font-semibold mb-4 bg-base-100">
        Compétences
      </h2>

      {/* --- Introduction --- */}
      <p className="text-center text-base-content/80 max-w-5xl mx-auto mb-8 leading-relaxed">
        Développeur full-stack, je maîtrise aussi bien le front-end que le
        back-end. Mon stack principal s’articule autour de React (Next.js) pour
        le front-end et
        {/* Python (Django) ou  */}
        Node.js (Express) pour le Back-end, que j’utilise pour concevoir des
        applications modernes, performantes et évolutives. Curieux et passionné,
        je reste en veille constante pour explorer de nouvelles technologies et
        perfectionner mes compétences.
      </p>

      {/* --- Liste de compétences --- */}
      <div className="flex justify-center flex-wrap max-w-[1200px] mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex justify-center items-center gap-2.5 w-[200px] m-2.5 px-5 py-3 rounded-lg border border-gray-300 bg-base-100 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <img
              className="w-[30px] h-[30px] object-contain"
              src={skill.src}
              alt={`${skill.name} logo`}
              loading="lazy"
            />
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;
