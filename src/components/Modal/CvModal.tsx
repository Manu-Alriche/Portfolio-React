export default function CvModal({ isOpen, onClose, onDownload, cvUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[70%] h-[80vh] flex flex-col overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Aperçu du CV</h2>
          <button
            onClick={onClose}
            className="text-xl hover:text-red-500 transition-all"
            aria-label="Fermer la modale"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Aperçu du PDF */}
        <iframe
          src={cvUrl}
          title="Aperçu du CV"
          className="w-full flex-1 border-0"
        ></iframe>

        {/* Actions */}
        <div className="flex justify-end gap-3 p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Fermer
          </button>
          <button
            onClick={onDownload}
            className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-900 transition"
          >
            <i className="fa-solid fa-download mr-2"></i>Télécharger
          </button>
        </div>
      </div>
    </div>
  );
}
