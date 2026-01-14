
const UploadImages = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-md p-6 md:p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold mb-2">Upload Images</h2>
        <p className="text-gray-300 mb-4">Upload your images to the gallery</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
          Upload
        </button>
      </div>
    </div>
  );
}

export default UploadImages;