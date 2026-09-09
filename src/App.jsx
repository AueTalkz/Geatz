import './index.css';
import './pages/Home.css';
import './pages/About.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home    from './pages/Home';
import Work    from './pages/Work';
import Project from './pages/Project';
import Create  from './pages/Create';
import Think   from './pages/Think';
import About   from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index        element={<Home />} />
          <Route path="work"       element={<Work />} />
          <Route path="work/:id"   element={<Project />} />
          <Route path="create"     element={<Create />} />
          <Route path="think"      element={<Think />} />
          <Route path="about"      element={<About />} />
          <Route path="contact"    element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
