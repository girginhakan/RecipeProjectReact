import Header from "./components/Header";
import Main from "./components/Main";
import RecipeList from "./components/RecipeList";
import Forms from "./components/Forms";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import RecipeDetail from "./components/RecipeDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";
import LoginPage from "./components/LoginPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/*" element={<Loading />} />
          <Route path="recipe-app" element={<Header />}>
            <Route path="main" element={<Main />} />
            <Route path="/recipe-app/forms" element={<PrivateRoute element={<Forms />} />} />
            <Route path="recipelist" element={<RecipeList />} />
            <Route path="recipelist/:recipeId" element={<RecipeDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
