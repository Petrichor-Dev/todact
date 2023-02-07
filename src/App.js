import './App.css';
import {Routes, Route} from "react-router-dom";
import Note from "./pages/note";
import AboutMe from "./pages/aboutme";
import DetailNote from "./pages/detailNote";
import DetailTodo from "./pages/detailTodo";
import NewNote from "./pages/newNote";
import NewTodo from "./pages/newTodo";
import ProfileSetting from "./pages/profileSetting";
import Todo from "./pages/todo";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return(
      <Routes>
        <Route path="/" element={<Note />} />

        <Route path="/note">
          <Route index element={<Note />} />
          <Route path=":id" element={<DetailNote />} />
          <Route path="new" element={<NewNote />} />
        </Route>

        <Route path="/todo">
          <Route index element={<Todo />} />
          <Route path=":id" element={<DetailTodo />} />
          <Route path="new" element={<NewTodo />} />
        </Route>

        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signup />} />
      </Routes>
  );
}

export default App;
