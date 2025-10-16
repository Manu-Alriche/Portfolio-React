import Competences from "./Sections/Competences";
import Contact from "./Sections/Contact";
import Projets from "./Sections/Projets";
// import Temoignages from "./Sections/Temoignages";

function Main() {
  return (
    <main className="overflow-x-hidden">
      <Competences />
      <Projets />
      {/* <Temoignages /> */}
      <Contact />
    </main>
  );
}

export default Main;

/* -------------------------------
 * SECTION COMPÉTENCES
 * ----------------------------- */

/* -------------------------------
 * SECTION PROJETS
 * ----------------------------- */

/* -------------------------------
 * SECTION TÉMOIGNAGES
 * ----------------------------- */

/* -------------------------------
 * SECTION CONTACT
 * ----------------------------- */
