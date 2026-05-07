import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterEvent from "./pages/RegisterEvent";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Workshop from "./pages/Workshop";

function App() {
   return  (

      <BrowserRouter>
      <Routes>
         {/* landing page */  }
         <Route element={<MainLayout />}>
         <Route path="/" element={<Beranda />} />
         <Route path="/competition" element={<Competition />} />
         <Route path="/seminar" element={<Seminar />} />
         <Route path="/talkshow" element={<Talkshow />} />
         <Route path="/workshop" element={<Workshop />} />

         </Route>
         {/* auth page */  }
         <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Route>

         <Route path="/register-event" element={<RegisterEvent />} /> 
         

         {/* beranda*/  }
                 
         
      </Routes>


      </BrowserRouter>
   // <div className="container mx-auto grid grid-cols-2 gap-6">
   // <Login /> 

   // <Register />

   // <RegisterEvent />

   // <Competition />

   // <Beranda />
   // </div>   
   );
}

export default App;