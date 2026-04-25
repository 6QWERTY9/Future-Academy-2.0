export interface INavProps {

    headerTheme?: 'dark' | 'light'
    linkType: 'header'|'footer';
    links: ILinkProps[]
}

export interface ILinkProps {
    to: string;
    text: string;
    id?: string;
}