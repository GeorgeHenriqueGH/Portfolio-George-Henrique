import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
        background: string;
        secundaryBackground: string;
        foreground: string;
        secundaryForeground: string;
        links: string;
    }
  }
}