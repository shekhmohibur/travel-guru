import { useRef, useState } from "react";

const OriginSelector = ({ origin }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [filtered, setFiltered] = useState(origin);
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFiltered(
      origin.filter((p) => p.toLowerCase().includes(value.toLowerCase()))
    );
    setOpen(true);
  };
  const placeSelect = (place) => {
    setQuery(place);
    setOpen(false);
  };
  const handleBlur = (e) => {
    const related = e.relatedTarget;
    if (!related || !containerRef.current?.contains(related)) {
      setOpen(false);
    }
  };
  return (
    <div
      tabIndex={-1}
      ref={containerRef}
      onBlur={handleBlur}
      className="relative font-montserrat"
    >
      <input
        required
        type="text"
        onChange={handleChange}
        value={query}
        onFocus={() => setOpen(true)}
        placeholder="From Where"
        className="bg-base-300 placeholder:font-medium w-full rounded-sm py-4 px-3 font-extrabold outline-none text-lg"
      />
      {open && (
        <ul className="bg-white absolute mt-1 w-full overflow-y-auto max-h-48 text-lg rounded-sm">
          {filtered.length > 0 ? (
            filtered?.map((place, index) => (
              <li key={index}>
                <button
                  onClick={() => placeSelect(place)}
                  className="p-2 cursor-pointer hover:bg-base-300 w-full text-left"
                >
                  {place}
                </button>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default OriginSelector;
