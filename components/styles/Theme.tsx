export class ThemeValues {
    constructor(
        public primaryColor: string,
        public primaryColorDarker: string,
        public accentColor: string,
        public backgroundColor: string,
        public textColor: string,
    ) { }
}

const ThemeLight = new ThemeValues(
    "#ADD8E6",
    "#7D9CA6",
    "#CF0048",
    "#FFFFFF",
    "#212121",
);


export const Theme: ThemeValues = ThemeLight;