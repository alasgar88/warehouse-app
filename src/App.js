import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Products,
  Users,
  Transactions,
  Warehouses,
  SharedLayout,
  LandingPage,
  ProtectedRoute,
  AuthProtected,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Products />} />
          <Route
            path='users'
            element={
              <AuthProtected>
                <Users />
              </AuthProtected>
            }
          />
          <Route path='transactions' element={<Transactions />} />
          <Route path='warehouses' element={<Warehouses />} />
        </Route>
        <Route>
          <Route path='landing' element={<LandingPage />} />
        </Route>
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
