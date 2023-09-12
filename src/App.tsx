import React from 'react';
import Layout from './components/layout/Layout';
import Responsive from './components/layout/Responsive';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/main';
import Page2 from './views/page2';

function App() {
  return (
    <Responsive>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/2' element={<Page2 />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Responsive>
  );
}

export default App;
