const SET_DARK_THEME = "SET_DARK_THEME";
const SET_LANG = "SET_LANG";

let initialState = {
  darkTheme: false,
  language: "english",
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DARK_THEME: {
      return { ...state, darkTheme: !state.darkTheme };
    }
    case SET_LANG: {
      return { ...state, language: action.value };
    }
    default:
      return state;
  }
}

export const changeThemeActionCreator = () => ({
  type: SET_DARK_THEME,
});

export const changeLanguageActionCreator = (language) => ({
  type: SET_DARK_THEME,
  value: language,
});
