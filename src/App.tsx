import './App.scss';
import { Navigate, Route, Routes } from "react-router-dom";
import { useLogInContext } from './context/logInContext';
import FormPage from './pages/FormPage';
import MarvelList from './pages/MarvelList';
import SingleMarvel from './pages/MarvelSingle';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoute from './services/protectingRoute';

function App() {
  const {logged} = useLogInContext();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<FormPage form={"login"}/>} />
      <Route path="/signup" element={<FormPage form={"signup"}/>} />
      <Route path="/list" element={
        <ProtectedRoute logged={logged}>
          <MarvelList/>
        </ProtectedRoute>
      } />
      <Route path="/list/:characterId" element={
        <ProtectedRoute logged={logged}>
          <SingleMarvel/>
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
