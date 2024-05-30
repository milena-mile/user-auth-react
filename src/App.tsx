import './App.scss';
import { Navigate, Route, Routes } from "react-router-dom";
import { useLogInContext } from './context/logInContext';
import FormPage from './pages/FormPage';
import MarvelList from './pages/MarvelList';
import SingleMarvel from './pages/MarvelSingle';
import NotFound from './components/NotFound/NotFound';

function App() {
  const {logged} = useLogInContext();
  console.log(logged);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<FormPage form={"login"}/>} />
      <Route path="/signup" element={<FormPage form={"signup"}/>} />
      <Route path="/list" element={
          logged ? (
            <MarvelList/>
          ) : (
            <Navigate replace to="/signin" />
          )
        } />
      <Route path="/list/:characterId" element={
          logged ? (
            <SingleMarvel/>
          ) : (
            <Navigate replace to="/signin" />
          )
        } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
