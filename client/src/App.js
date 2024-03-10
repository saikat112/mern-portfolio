import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData } from './redux/rootSlice';
function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      const resposne = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(resposne.data));

    } catch (error) {
console.log(error);
    }
  }
  useEffect(() => {
    getPortfolioData()
  }, []);
  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
