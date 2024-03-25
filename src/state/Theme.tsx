import React from 'react';

export const storageKey = 'theme-preference';

type Theme = 'light' | 'dark';

type ThemeType = {
  isInitialLoad: boolean;
  theme: Theme;
};

type APITheme = {
  initialTheme: (theme: Theme) => void;
  updateTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeType>({
  isInitialLoad: true,
  theme: 'light',
});

const APIThemeContext = React.createContext<APITheme>({
  initialTheme: () => {},
  updateTheme: () => {},
});

export function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState<ThemeType>({
    isInitialLoad: true,
    theme: 'light',
  });

  const initialTheme = React.useCallback<
    APITheme['initialTheme']
  >(() => {}, []);

  const updateTheme = React.useCallback<APITheme['updateTheme']>(
    (theme: Theme) => {
      setState((currentState) => ({
        ...currentState,
        theme,
      }));
    },
    []
  );

  React.useEffect(() => {
    function initial() {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      const savedTheme = localStorage.getItem(
        storageKey
      ) as Theme | null;

      const newTheme = savedTheme
        ? savedTheme
        : prefersDarkMode
        ? 'dark'
        : 'light';

      setState((currentState) => ({
        ...currentState,
        theme: newTheme,
      }));
    }

    initial();
  }, []);

  const value = React.useMemo(
    () => ({
      ...state,
    }),
    [state]
  );

  const api = React.useMemo(
    () => ({
      initialTheme,
      updateTheme,
    }),
    [initialTheme, updateTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <APIThemeContext.Provider value={api}>
        {children}
      </APIThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function useThemeAPI() {
  return React.useContext(APIThemeContext);
}
