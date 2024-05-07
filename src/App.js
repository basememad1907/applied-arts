import Layout from "./Compnents/Layout/Layout";
import Home from "./Compnents/Home/Home";
import AboutHome from "./Compnents/About/AboutHome";
import About from "./Compnents/About/About";
import AboutEstablishment from "./Compnents/About/AboutEstablishment";
import Education from "./Compnents/Education/Education";
import EventsAndNews from "./Compnents/EventsAndNews/EventsAndNews";
import Gallery from "./Compnents/Gallery/Gallery";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutIntroduction from "./Compnents/About/AboutIntroduction";
import NotFound from "./Compnents/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import EducationHome from "./Compnents/Education/EducationHome";
import Strategies from "./Compnents/Education/Stratigies";
import Schedules from "./Compnents/Education/Schedules";
import ProductDesign from "./Compnents/Departments/ProductDesign/ProductDesign";
import ProductDesignHome from "./Compnents/Departments/ProductDesign/ProductDesignHome";
import PDGallery from "./Compnents/Departments/ProductDesign/PDGallery";
import PDScheduales from "./Compnents/Departments/ProductDesign/PDScheduales";
import PDUpdates from "./Compnents/Departments/ProductDesign/PDUpdates";
import Fashion from "./Compnents/Departments/Fashion/Fashion";
import FashionHome from "./Compnents/Departments/Fashion/FashionHome";
import FashionScheduales from "./Compnents/Departments/Fashion/FashionScheduales";
import FashionGallery from "./Compnents/Departments/Fashion/FashionGallery";
import FashionUpdate from "./Compnents/Departments/Fashion/FashionUpdate";
import InteriorDesign from "./Compnents/Departments/InteriorDesign/InteriorDesign";
import InteriorDesignHome from "./Compnents/Departments/InteriorDesign/InteriorDesignHome";
import IntDesignScheduals from "./Compnents/Departments/InteriorDesign/IntDesignScheduals";
import IntDesignGallery from "./Compnents/Departments/InteriorDesign/IntDesignGallery";
import IntDesignUpdates from "./Compnents/Departments/InteriorDesign/IntDesignUpdates";
import ADV from "./Compnents/Departments/Advertising/ADV";
import AdvHome from "./Compnents/Departments/Advertising/AdvHome";
import AdvScheduales from "./Compnents/Departments/Advertising/AdvScheduales";
import AdvGallery from "./Compnents/Departments/Advertising/AdvGallery";
import AdvUpdate from "./Compnents/Departments/Advertising/AdvUpdate";
import Cinema from "./Compnents/Departments/Cinema/Cinema";
import CinemaHome from "./Compnents/Departments/Cinema/CinemaHome";
import CinemaScheduales from "./Compnents/Departments/Cinema/CinemaScheduales";
import CinemaGallery from "./Compnents/Departments/Cinema/CinemaGallery";
import CinemaUpdates from "./Compnents/Departments/Cinema/CinemaUpdates";
import Photos from "./Compnents/Gallery/Photos";
import Videos from "./Compnents/Gallery/Videos";
import Ai from "./Compnents/AI/Ai";

import UploadProjectsHome from "./Compnents/Departments/Fashion/Dashboard/UploadProjectsHome";
import FashionUploadProjects from "./Compnents/Departments/Fashion/Dashboard/UploadProjectsDash";
import FashionRequestsViewer from "./Compnents/Departments/Fashion/Dashboard/Views/RequestsViewer";
import FashionStudentsUploadProjects from "./Compnents/Departments/Fashion/Dashboard/StudentsUploadProjects";
import UploadUpdates from "./Compnents/Departments/Fashion/Dashboard/UploadUpdates";
import SchedulesDash from "./Compnents/Departments/Fashion/Dashboard/SchedulesDash";
import FashionFacultyMembers from "./Compnents/Departments/Fashion/FashionFacultyMembers";
import MembersDash from "./Compnents/Departments/Fashion/Dashboard/MembersDash";

import PDUploadProjectsHome from "./Compnents/Departments/ProductDesign/Dashboard/UploadProjectsHome";
import PDRequestsViewer from "./Compnents/Departments/ProductDesign/Dashboard/Views/RequestsViewer";
import PDStudentsUploadProjects from "./Compnents/Departments/ProductDesign/Dashboard/StudentsUploadProjects";
import PDUploadProjects from './Compnents/Departments/ProductDesign/Dashboard/UploadProjectsDash'
import PDMembersDash from "./Compnents/Departments/ProductDesign/Dashboard/MembersDash";
import PDFacultyMembers from "./Compnents/Departments/ProductDesign/PDFacultyMembers";
import PDSchedulesDash from "./Compnents/Departments/ProductDesign/Dashboard/SchedulesDash";
import PDUploadUpdates from "./Compnents/Departments/ProductDesign/Dashboard/UploadUpdates";


import IDMembersDash from "./Compnents/Departments/InteriorDesign/Dashboard/MembersDash";
import IDFacultyMembers from "./Compnents/Departments/InteriorDesign/IDFacultyMembers";
import IDSchedulesDash from "./Compnents/Departments/InteriorDesign/Dashboard/SchedulesDash";
import IDUploadUpdates from "./Compnents/Departments/InteriorDesign/Dashboard/UploadUpdates";
import IDUploadProjectsHome from "./Compnents/Departments/InteriorDesign/Dashboard/UploadProjectsHome";
import IDUploadProjects from "./Compnents/Departments/InteriorDesign/Dashboard/UploadProjectsDash";
import IDRequestsViewer from "./Compnents/Departments/InteriorDesign/Dashboard/Views/RequestsViewer";
import IDStudentsUploadProjects from "./Compnents/Departments/InteriorDesign/Dashboard/StudentsUploadProjects";

import ADVMembersDash from "./Compnents/Departments/Advertising/Dashboard/MembersDash";
import ADVFacultyMembers from "./Compnents/Departments/Advertising/ADVFacultyMembers";
import ADVSchedulesDash from "./Compnents/Departments/Advertising/Dashboard/SchedulesDash";
import ADVUploadProjects from "./Compnents/Departments/Advertising/Dashboard/UploadProjectsDash";
import ADVUploadProjectsHome from "./Compnents/Departments/Advertising/Dashboard/UploadProjectsHome";
import ADVUploadUpdates from "./Compnents/Departments/Advertising/Dashboard/UploadUpdates";
import ADVStudentsUploadProjects from "./Compnents/Departments/Advertising/Dashboard/StudentsUploadProjects";
import ADVRequestsViewer from "./Compnents/Departments/Advertising/Dashboard/Views/RequestsViewer";

import CinemaMembersDash from "./Compnents/Departments/Cinema/Dashboard/MembersDash";
import CinemaFacultyMembers from "./Compnents/Departments/Cinema/CinemaFacultyMembers";
import CinemaSchedulesDash from "./Compnents/Departments/Cinema/Dashboard/SchedulesDash";
import CinemaUploadProjects from "./Compnents/Departments/Cinema/Dashboard/UploadProjects";
import CinemaUploadUpdates from "./Compnents/Departments/Cinema/Dashboard/UploadUpdates";
import UploadPhotosDash from "./Compnents/Departments/Cinema/Dashboard/UploadPhotosDash";
import UpladVideoDash from "./Compnents/Departments/Cinema/Dashboard/UpladVideoDash";
import CinemaPhotosGallery from "./Compnents/Departments/Cinema/CinemaPhotosGallery";
import CinemaVideosGallery from "./Compnents/Departments/Cinema/CinemaVideosGallery";
import CinemaStudentsUploadProjects from "./Compnents/Departments/Cinema/Dashboard/StudentUploadProject";
import CinemaStudentsUploadPhoto from "./Compnents/Departments/Cinema/Dashboard/StudentUploadPhoto";
import CinemaStudentsUploadVideo from "./Compnents/Departments/Cinema/Dashboard/StudentUploadVideo";
import CinemaRequestViewer from "./Compnents/Departments/Cinema/Dashboard/Views/RequestViewer";
import CinemaRequestVideo from "./Compnents/Departments/Cinema/Dashboard/Views/RequestVideo";
import CinemaRequestPhotos from "./Compnents/Departments/Cinema/Dashboard/Views/RequestPhotos";
import ForgotPassword from "./Pages/Forgot Password/ForgotPassword";
import LoginHome from "./Pages/Login/LoginHome";
import ForgetPassHome from "./Pages/Forgot Password/ForgetPassHome";
import ResetPassword from "./Pages/Reset Password/ResetPassword";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Logout from "./Pages/Logout/Logout";
import UserProfile from "./Pages/User Profile/UserProfile";
import ProtectedRoute from "./Compnents/Protected Route/ProtectedRoute";
import Slider from "./Compnents/Slider/slider";

import EventsNewsDash from './Compnents/EventsAndNews/Dashboard/Events&NewsDash';
import EventsAndNewsHome from './Compnents/EventsAndNews/EventsHome';
import EventsDash from './Compnents/EventsAndNews/Dashboard/Events';
import NewsDash from './Compnents/EventsAndNews/Dashboard/News';
import News from './Compnents/EventsAndNews/News';


function App() {
  const [userData, setUserData] = useState({});
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userToken")!==null) {
      saveUserData();
    }
  }, []);
  function saveUserData() {
    let encodedToken = JSON.parse(localStorage.getItem("userToken"));
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken.user);
    console.log(decodedToken.user);
  }
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout userData={userData} setUserData={setUserData}/>,
      children: [
        { index: true, element: <Home userData={userData}  /> },
        {
          path: "loginHome",
          element: <LoginHome />,
          children: [
            { index: true, element: <Login saveUserData={saveUserData} /> },
            {
              path: "ForgotPassword",
              element: <ForgetPassHome />,
              children: [
                { index: true, element: <ForgotPassword /> },
                { path: "ResetPassword", element: <ResetPassword /> },
              ],
            },
          ],
        },
        { path: "Logout", element: <Logout /> },
        { path: "Profile", element: <UserProfile userData={userData} /> },
        // {path: "Register", element: <Register />},
        {
          path: "aboutHome",
          element: <AboutHome />,
          children: [
            { index: true, element: <About /> },
            { path: "aboutIntroduction", element: <AboutIntroduction /> },
            { path: "aboutEstablishment", element: <AboutEstablishment /> },
          ],
        },
        {
          path: "educationHome",
          element: <EducationHome />,
          children: [
            { index: true, element: <Education /> },
            { path: "strategies", element: <Strategies /> },
            { path: "schedules", element: <Schedules /> },
          ],
        },
        {
          path: "productDesign",
          element: <ProductDesign userData={userData}/>,
          children: [
            { index: true, element: <ProductDesignHome /> },

            { path: "membersDash", element: <PDMembersDash /> },

            { path: "schedulesDash", element: <PDSchedulesDash /> },
            { path: "UploadUpdates", element: <PDUploadUpdates userData={userData} /> },
            {
              path: "UploadProjects",
              element: <PDUploadProjectsHome userData={userData}/>,
              children: [
                { index: true, element: <PDUploadProjects userData={userData}/> },
                { path: "RequestsViewer", element: <PDRequestsViewer /> },
              ],
            },
            { path: "StudentsUpload", element: <PDStudentsUploadProjects userData={userData}/> },
            { path: "facultyMembers", element: <PDFacultyMembers /> },
            { path: "pdGallery", element: <PDGallery /> },
            { path: "pdSceduales", element: <PDScheduales /> },
            { path: "pdUpdates", element: <PDUpdates /> },
          ],
        },
        {
          path: "Fashion",
          element: <Fashion userData={userData} />,
          children: [
            { index: true, element: <FashionHome /> },
            {
              path: "UploadProjects",
              element: <UploadProjectsHome userData={userData} />,
              children: [
                { index: true, element: <FashionUploadProjects userData={userData} /> },
                { path: "RequestsViewer", element: <FashionRequestsViewer /> },
              ],
            },
            {
              path: "StudentsUpload",
              element: <FashionStudentsUploadProjects userData={userData} />,
            },
            { path: "SchedulesDash", element: <SchedulesDash /> },
            { path: "facultyMembers", element: <FashionFacultyMembers /> },
            { path: "membersDash", element: <MembersDash /> },
            { path: "UploadResearch", element: <UploadUpdates userData={userData} /> },
            { path: "fashionScheduales", element: <FashionScheduales /> },
            { path: "fashionGallery", element: <FashionGallery /> },
            { path: "fashionUpdate", element: <FashionUpdate /> },
          ],
        },
        {
          path: "InteriorDesign",
          element: <InteriorDesign userData={userData} />,
          children: [
            { index: true, element: <InteriorDesignHome /> },
            { path: "membersDash", element: <IDMembersDash /> },
            { path: "schedulesDash", element: <IDSchedulesDash /> },
            { path: "UploadUpdates", element: <IDUploadUpdates userData={userData} /> },
            {
              path: "UploadProjects",
              element: <IDUploadProjectsHome userData={userData} />,
              children: [
                { index: true, element: <IDUploadProjects userData={userData} /> },
                { path: "RequestsViewer", element: <IDRequestsViewer /> },
              ],
            },
            { path: "StudentsUpload", element: <IDStudentsUploadProjects userData={userData} /> },
            {
              path: "facultyMembers",
              element: <IDFacultyMembers />,
            },
            { path: "intDesignScheduals", element: <IntDesignScheduals /> },
            { path: "intDesignGallery", element: <IntDesignGallery /> },
            { path: "intDesignUpdates", element: <IntDesignUpdates /> },
          ],
        },
        {
          path: "ADV",
          element: <ADV  userData={userData}/>,
          children: [
            { index: true, element: <AdvHome /> },
            { path: "membersDash", element: <ADVMembersDash userData={userData}/> },
            { path: "schedulesDash", element: <ADVSchedulesDash /> },
            { path: "UploadUpdates", element: <ADVUploadUpdates userData={userData} /> },
            {
              path: "UploadProjectsHome",
              element: <ADVUploadProjectsHome userData={userData} />,
              children: [
                { index: true, element: <ADVUploadProjects userData={userData} /> },
                { path: "RequestsViewer", element: <ADVRequestsViewer /> },
              ],
            },
            { path: "StudentsUpload", element: <ADVStudentsUploadProjects userData={userData} /> },
            { path: "facultyMembers", element: <ADVFacultyMembers /> },
            { path: "advScheduales", element: <AdvScheduales /> },
            { path: "advGallery", element: <AdvGallery userData={userData} /> },
            { path: "advUpdate", element: <AdvUpdate /> },
          ],
        },
        {
          path: "Cinema",
          element: <Cinema userData={userData} />,
          children: [
            { index: true, element: <CinemaHome /> },
            { path: "membersDash", element: <CinemaMembersDash /> },
            { path: "schedulesDash", element: <CinemaSchedulesDash /> },
            { path: "UploadUpdates", element: <CinemaUploadUpdates userData={userData} /> },
            {
              path: "UploadProjects",
              element: <CinemaUploadProjects userData={userData} />,
              children: [
                { index: true, element: <UploadPhotosDash userData={userData} /> },
                { path: "UpladVideoDash", element: <UpladVideoDash /> },
                {
                  path: "CinemaRequestViewer",
                  element: <CinemaRequestViewer />,
                  children: [
                    { index: true, element: <CinemaRequestPhotos /> },
                    {
                      path: "CinemaRequestVideo",
                      element: <CinemaRequestVideo />,
                    },
                  ],
                },
              ],
            },
            {
              path: "StudentsUploadProjects",
              element: <CinemaStudentsUploadProjects userData={userData} />,
              children: [
                { index: true, element: <CinemaStudentsUploadPhoto userData={userData} /> },
                {
                  path: "UploadVideoDash",
                  element: <CinemaStudentsUploadVideo userData={userData} />,
                },
              ],
            },
            { path: "facultyMembers", element: <CinemaFacultyMembers /> },
            { path: "cinemaScheduales", element: <CinemaScheduales /> },
            {
              path: "cinemaGallery",
              element: <CinemaGallery />,
              children: [
                { index: true, element: <CinemaPhotosGallery /> },
                { path: "VideosGallery", element: <CinemaVideosGallery /> },
              ],
            },
            { path: "cinemaUpdates", element: <CinemaUpdates /> },
          ],
        },
        { path: "eventsAndNews", element: <EventsAndNews userData={userData} /> , children:[
          { index:true , element : <EventsAndNewsHome userData={userData}/>},
          { path:"News" , element : <News />},
          { path: "EventsNewsDash", element: <EventsNewsDash userData={userData}/> ,children:[
            {index:true , element: <EventsDash userData={userData}/>},
            {path:"NewsDash" , element: <NewsDash />}
          ] },
        ] },
        {
          path: "gallery",
          element: <Gallery />,
          children: [
            { index: true, element: <Photos /> },
            { path: "videos", element: <Videos /> },
          ],
        },
        { path: "ai", element: <ProtectedRoute><Ai /></ProtectedRoute>  },
        { path: "slider", element: <Slider/> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
