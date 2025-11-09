import { createGlobalStyle, DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        card: string;
      };
      text: {
        primary: string;
        disabled: string;
      };
      accent: string;
    };
    shadows: {
      card: string;
    };
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
  }

  // Kartlar için genel stil
  .card {
    background-color: ${props => props.theme.colors.background.card};
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadows.card};
  }

  // Butonlar için genel stil
  button {
    background-color: ${props => props.theme.colors.accent};
    color: white;
    border: none;
    border-radius: 6px;
    
    &:disabled {
      background-color: ${props => props.theme.colors.text.disabled};
    }
  }

  // Linkler için genel stil
  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`
