import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => addFavorite(id),
  removeFavorite: (id) => removeFavorite(id),
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((curFavIds) => [...curFavIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((curFavIds) =>
      curFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
