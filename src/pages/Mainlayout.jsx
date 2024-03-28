import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";



const Mainlayout = () => {
    return (
        <div>
            <div className="max-w-7xl px-2 mx-auto">
           <Navigation></Navigation>
    
            <div className="min-h-[calc(100vh-138px)]">
            <Outlet></Outlet>
            </div>
   
        </div>
        <Footer></Footer>
        </div>
 

    );
};

export default Mainlayout;