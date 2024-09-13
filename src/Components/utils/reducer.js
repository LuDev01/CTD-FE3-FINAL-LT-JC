export const reducer = (state, action) => {
    switch (action.type) {
        case "[Dentist] setDentist":
            return { ...state, data: action.payload };
        case "[Dentist] setFavs":
            return { ...state, favs: action.payload };

        case "[Theme] setTheme":
            return { ...state, theme: action.payload };



        default:
            throw new Error("Acción no existente");
    }
}