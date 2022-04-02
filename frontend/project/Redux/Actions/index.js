
export const addFavorite = (peli) => {
    return {
        type: "addFavorite",
        payload:{peli}
    }
};
export const removeFav = (id) => {
    return {
        type: "removeFav",
        payload:id
    }
};

export const setMovies = (movies) => {
    return {
        type: "setMovies",
        payload:movies
    }
};
