import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Products,
  User,
  Transactions,
  Warehouses,
  SharedLayout,
  LandingPage,
  ProtectedRoute,
  UserTransaction,
  AuthProtected,
  WarehouseDetail,
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
          <Route
            index
            element={
              <AuthProtected>
                <User />
              </AuthProtected>
            }
          />
          <Route
            path='products'
            element={
              <AuthProtected>
                <Products />
              </AuthProtected>
            }
          />
          <Route
            path='transactions'
            element={
              <AuthProtected>
                <Transactions />
              </AuthProtected>
            }
          />
          <Route
            path='warehouses'
            element={
              <AuthProtected>
                <Warehouses />
              </AuthProtected>
            }
          />
          <Route
            path='warehouses/:id'
            element={
              <AuthProtected>
                <WarehouseDetail />
              </AuthProtected>
            }
          />
          <Route path='user/transactions' element={<UserTransaction />} />
        </Route>
        <Route path='landing' element={<LandingPage />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
