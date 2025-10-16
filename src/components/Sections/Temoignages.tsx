function Temoignages() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Développeur partenaire",
      image: "../public/hero.jpg",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, 
      sint repudiandae ratione exercitationem saepe distinctio cumque quaerat 
      nostrum laborum? Rem adipisci natus eos nemo reprehenderit, cumque 
      nostrum enim commodi. Eum, enim vero eveniet doloremque sed veniam. 
      Doloremque explicabo non reprehenderit expedita! Accusamus mollitia 
      repellendus dolorum officiis libero quod deleniti cum.`,
    },
    // Tu peux ajouter d'autres témoignages ici
  ];

  return (
    <section id="temoignages" className="mb-24 px-6 md:px-12 py-0 scroll-mt-24">
      <h2 className="text-center text-[35px] font-semibold mb-10 bg-base-100">
        Témoignages
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col md:flex-row items-center bg-base-100 rounded-2xl shadow-md p-6 gap-6"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-32 h-32 md:w-24 md:h-24 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-lg">{t.name}</p>
              <p className="text-sm text-base-content/80 mb-2">{t.role}</p>
              <p className="text-base-content/80 leading-relaxed">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Temoignages;
