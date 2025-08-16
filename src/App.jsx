import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "../src/pages/Home"
import Navbar from "./components/common/Navbar";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail"
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./components/core/Dashboard/MyProfile";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error"
// import OpenRoute from "./components/core/Auth/OpenRoute";
import Settings from "./components/core/Dashboard/Settings/index";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart/index";
import {ACCOUNT_TYPE} from "./utils/constants";
import { useSelector } from "react-redux";
import MyCourses from "./components/core/Dashboard/MyCourses/index"
import AddCourse from "./components/core/Dashboard/AddCourse";
import EditCourse from "./components/core/Dashboard/EditCourse/index";
import Catalog from "./pages/Catalog"
import CourseDetails from "./pages/CourseDetails";
// import VideoDetailsSidebar from "./components/core/ViewCourse/VideoDetailsSidebar";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import ViewCourse from "./pages/ViewCourse";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";


function App() {
  const {user}=useSelector((state)=>state.profile);
  return (
      <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Home/></>}/>
          <Route path="/catalog/:catalogName" element={<Catalog/>}/>
          <Route path="/courses/:courseId" element={<CourseDetails/>}/>
          <Route path="/login" element={<><Login/></>}/>
          <Route path="/signup" element={<><Signup/></>}/>
          <Route path="/verify-email" element={<><VerifyEmail/></>}/>
          <Route path="/forgot-password" element={<><ForgotPassword/></>}/>
          <Route path="/update-password/:id" element={<><UpdatePassword/></>}/>
          <Route path="/about" element={<><About/></>}/>
          <Route path="/contact" element={<><ContactUs/></>}/>  
          <Route element={
            <>
               <Dashboard/>
            </>
          }>
            <Route path="/dashboard/my-profile" element={<MyProfile/>}/> 
            <Route path="/dashboard/settings" element={<Settings/>}/> 
            
            {
              user?.accountType===ACCOUNT_TYPE.STUDENT && (
                <>
                    <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
                    <Route path="/dashboard/cart" element={<Cart/>}/>
                </>
              )
            }
            {
              user?.accountType===ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                    <Route path="/dashboard/my-courses" element={<MyCourses/>}/>
                    <Route path="/dashboard/add-course" element={<AddCourse/>}/>
                    <Route path="/dashboard/edit-course/:courseId" element={<EditCourse/>}/>
                    <Route path="/dashboard/instructor" element={<Instructor/>}/>
                  
                </>
              )
            }
          </Route>   

            {/* Nested Route for View Course */}

            <Route element={
              <>
                <ViewCourse/>
              </>

            }>
              {
                user?.accountType===ACCOUNT_TYPE.STUDENT && (
                  <>
                    <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                    element={<VideoDetails/>}
                    />
                  </>
                )
              }



            </Route>

          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>

  );
}

export default App;

