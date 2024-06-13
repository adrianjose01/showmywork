import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";
import MyProfileView from "./views/MyProfileView";
import EditView from "./views/EditView";
import EditProjectsView from "./views/EditProjectsView";
import AddNewProject from "./views/AddNewProject";
import { UserContextProvider } from "./store/user-context";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/profile/:id" element={<ProfileView />} />
          <Route
            path="/my-profile/:id"
            element={
              <ProtectedRoute>
                <MyProfileView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-projects/:id"
            element={
              <ProtectedRoute>
                <EditProjectsView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-new-project"
            element={
              <ProtectedRoute>
                <AddNewProject />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
