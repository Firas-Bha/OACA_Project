import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs,reclamationInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns,reclamationColumns,materielsColumns,commandesColumns} from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import NewPost from "./pages/newReclamation/newReclamation";
import NewCommande from "./pages/newCommande/newCommande";
import NewMateriel from "./pages/newMateriel/newMateriel";
import EditRec from "./pages/editRec/EditRec.jsx";
//import ModifierRec from "./pages/modifierRec/modifierRec";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
          <Route path="posts">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={reclamationColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewPost  />
                  </ProtectedRoute>
                }
              />
              <Route
                path="EditRec"
                element={
                  <ProtectedRoute>
                    <EditRec  />
                  </ProtectedRoute>
                }
              />
            </Route>
           

            <Route path="materiels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={materielsColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewMateriel  />
                  </ProtectedRoute>
                }
              />
            </Route>




            <Route path="commandes">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={commandesColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewCommande />
                  </ProtectedRoute>
                }
              />
            </Route>












            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
