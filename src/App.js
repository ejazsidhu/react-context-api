import React from 'react';
import { Navbar, BookList } from './components';
import ThemeContextProvider from './context/theme-context/themeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>

          <Navbar />
          <BookList />

      </ThemeContextProvider>

    </div>
  );
}

export default App;
