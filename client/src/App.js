import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const [loadingState, setLoadingState] = useState(true);

  const getPortfolioData = async () => {
    try {
      setLoadingState(true);
      dispatch(ShowLoading())
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading())
      setLoadingState(false);
    } catch (error) {
      dispatch(HideLoading())
      console.log(error);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    if(!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

useEffect(() => {
  if(reloadData){
    getPortfolioData();
  }
}, [reloadData]);

  return (
    <BrowserRouter>
      {loadingState ? <Loader /> : null}
      {loading ? <Loader /> : <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>}
    </BrowserRouter>
  );
}

export default App;
