import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Schedules/Header/Header';
import SideBar from './components/Schedules/SideBar/SideBar';
import SessionCard from './components/Schedules/SessionCard/SessionCard';
import SessionHistory from './components/Schedules/SessionHistory/SessionHistory';
import RightPage from './components/SignPage/RightPage/RightPage';
import LeftPage from './components/SignPage/LeftSide/LeftPage';
import JuniorSideBar from './components/Junior/JuniorSideBar/JuniorSideBar';
import NavBar from './components/Junior/Navbar/NavBar';
import UserDataTable from './components/Junior/UserDataTable/UserDataTable';
import SeniorSideBar from './components/Senior/SeniorSideBar/SeniorSideBar';
import SeniorHeader from './components/Senior/SeniorHeader/SeniorHeader'
import SeniorDataTable from './components/Senior/SeniorDataTable/SeniorDataTable';
import DashboardSideBar from './components/Dashboard/DashboardSideBar/DashboardSideBar';
import DashboardHeader from './components/Dashboard/DashboardHeader/DashboardHeader';
import DashboardDataBar from './components/Dashboard/DashboardDataBar/DashboardDataBar';
import UserChart from './components/Dashboard/UserChart/UserChart';




function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route
          path="/dashboard"
          element={
            <div >
                <DashboardHeader/>
                <DashboardDataBar/> 
                <DashboardSideBar/>
                <UserChart/> 
            </div>
          }
        />
     <Route
          path="/schedules"
          element={
            <div >
                  <Header />
                  <SideBar />
                  <SessionCard />
                  <SessionHistory />
                  
            </div>
          }
        />

        <Route
          path="/signup"
          element={
            <div>
              <LeftPage />
              <RightPage />
            </div>
          }
        />
        <Route
          path="/juniors"
          element={
            <div>
              <JuniorSideBar/>
              <NavBar/>
              <UserDataTable/>
            </div>
          }
        />
          <Route
          path="/seniors"
          element={
            <div>
              <SeniorSideBar/>
              <SeniorHeader/>
              <SeniorDataTable/>
            </div>
            
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
