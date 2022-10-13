import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import BookDetail from "./components/pokemons/PokemonDetails";
import ContactPage from "./components/contact/ContactPage";
import "./App.css";

function App() {
	return (
    <AuthProvider>
      <Router>
        <Nav />

        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/detail/:name" element={<BookDetail/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
	);
}

export default App;