import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Studentlist from './Studentlist';
import Attendancelist from './Attendancelist';
import Addattendance from './Addattendance';


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <Routes>
                <Route path ="/dashboard" element={<Dashboard/>}></Route>
                <Route path ="/student-list" element={<Studentlist/>}></Route>
                <Route path ="/student/:id" element={<Attendancelist/>}></Route>
                <Route path ="/add-attendace/:id" element={<Addattendance/>}></Route>

            </Routes>
           
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
