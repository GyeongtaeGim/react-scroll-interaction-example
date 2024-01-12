import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layout';
import IndexPage from './page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<IndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
