interface Icolors {
    background: string,
    navbarBg: string,
    primary: string,
    secondary: string,
    hover: string,
    active: string,
    borderPhoto: string,
    opaco: string,
    linkColor: string,
    linkColorHover: string
}

export interface DefaultTheme {
    colors: Icolors;
}

export type Tfont = string