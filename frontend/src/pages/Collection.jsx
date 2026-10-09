import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";

/** Bouton de filtre avec menu qui s'ouvre au survol (et au clic pour le mobile) */
const FilterMenu = ({ label, options, selected, onToggle }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition ${
          selected.length > 0
            ? "bg-black text-white border-black"
            : "border-gray-300 hover:border-black"
        }`}
      >
        {label}
        {selected.length > 0 && (
          <span className="bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {selected.length}
          </span>
        )}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 3l4 4 4-4" />
        </svg>
      </button>

      {open && (
        // top-full sans marge : le menu touche le bouton, donc le survol ne se perd pas
        <div className="absolute left-0 top-full z-20 pt-2">
          <div className="min-w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
            {options.map((opt) => {
              const checked = selected.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => onToggle(opt.value)}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  <span
                    className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                      checked ? "bg-black border-black" : "border-gray-400"
                    }`}
                  >
                    {checked && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.8"
                      >
                        <path d="M1.5 5l2.5 2.5L8.5 2.5" />
                      </svg>
                    )}
                  </span>
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  /* filters */
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relevant");

  // load more
  const [visible, setVisible] = useState(10);

  /** keep the selected filters */
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  /** filter + search + sort, all in one function */
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    } else if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    }

    setFilterProducts(productsCopy);
  };

  // sortType is in the dependencies, so the separate sortProduct function is no longer needed
  useEffect(() => {
    applyFilter();
    setVisible(10);
  }, [category, subCategory, search, showSearch, sortType]);

  return (
    <div className="pt-8 border-t border-gray-300">
      {/** Title */}
      <div className="text-base sm:text-2xl mb-5">
        <Title text1={"ALL "} text2={"COLLECTIONS"} />
      </div>

      {/** Filter bar + sort */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <FilterMenu
            label="Catégorie"
            selected={category}
            onToggle={(value) => toggleCategory({ target: { value } })}
            options={[
              { label: "Women", value: "Women" },
              { label: "Men", value: "Men" },
              { label: "Kids", value: "Kids" },
            ]}
          />
          <FilterMenu
            label="Type"
            selected={subCategory}
            onToggle={(value) => toggleSubCategory({ target: { value } })}
            options={[
              { label: "Tops", value: "Topwear" },
              { label: "Bottoms", value: "Bottomwear" },
              { label: "Winterwear", value: "Winterwear" },
            ]}
          />

          {(category.length > 0 || subCategory.length > 0) && (
            <button
              onClick={() => {
                setCategory([]);
                setSubCategory([]);
              }}
              className="text-sm underline text-gray-600 hover:text-black"
            >
              Remove filters
            </button>
          )}
        </div>

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-300 rounded-full text-sm px-4 py-2"
        >
          <option value="relevant">Sort by : Relevant</option>
          <option value="low-high">Sort by : Low to High</option>
          <option value="high-low">Sort by : High to Low</option>
        </select>
      </div>

      {/** Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
        {filterProducts.slice(0, visible).map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {/** See more button, only shown while there's more to load */}
      {visible < filterProducts.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible((prev) => prev + 10)}
            className="border border-gray-400 px-8 py-3 text-sm active:bg-gray-100 hover:bg-gray-50 transition"
          >
            SEE MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default Collection;