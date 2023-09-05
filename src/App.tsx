import React from 'react';
import Layout from './components/layout/Layout';
import Responsive from './components/layout/Responsive';
import Page1 from './views/page1';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page2 from './views/page2';

function App() {
  return (
    <Responsive>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/page1' element={<Page1 />}></Route>
              <Route path='/page2' element={<Page2 />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Responsive>
  );
}

export default App;
