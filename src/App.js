import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { AuthProvider } from "./utils/Auth";
import { RequireAuth } from "./utils/RequireAuth";
import { Mobile } from "./Components/Mobile";
import { Buypage } from "./Components/Buypage";
import { PagenotFound } from "./Components/PagenotFound";
import { CartProvider } from "./utils/Cartcontext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="Mobile" element={<Mobile />} />
        </Route>
        <Route
          path="Buy"
          element={
            <CartProvider>
              <Buypage />
            </CartProvider>
          }
        />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
