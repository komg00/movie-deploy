import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reducer/store";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import TV from "./pages/TV";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Login from "./Components/Login";
import MoviePage from "./Components/MoviePage";
import KakaoRedirect from "./Components/KakaoRedirect";

function App() {
  return (
    <Provider store={store}>
      <div className="root-wrap">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/celebrity" element={<Celebrity />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/tv/:tv_name" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movie2" element={<MoviePage />} />
            <Route path="/oauth" element={<KakaoRedirect />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
