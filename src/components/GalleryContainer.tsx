import Gallery from "./Gallery";

function GalleryContainer() {
  return (
    <div className="rounded-lg  bg-white mx-4 gallery-shadow">
      <div className="grid grid-cols-12 p-2">
        {/* left top */}
          <div className="col-span-6 ">
            <h3 className="text-xl font-semibold">Files are selected</h3>
          </div>
          {/* right top */}
          <div className="text-md col-span-6 flex justify-end">
            <button>Delete file</button>
          </div>
        <hr />
      </div>
      <Gallery></Gallery>     
    </div>
  )
}

export default GalleryContainer;