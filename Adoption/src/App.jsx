import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Adopt from "./pages/Adopt";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import InnerAdopt from "./pages/InnerAdopt";
import About from "./pages/About";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import InsertPet from "./pages/InsertPet";
import { PetProvider } from "./context/PetContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App (){
  return (
    <AuthProvider>
      <PetProvider>
        <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Routes>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/adopt" element={<Adopt />}></Route>
            <Route path="/inneradopt" element={<InnerAdopt />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/insertpet" element={<InsertPet />}></Route>

            <Route element={<ProtectedRoute />}></Route>
          </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </PetProvider>
    </AuthProvider>
  );
}

export default App;