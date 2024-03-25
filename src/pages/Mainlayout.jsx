import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";



const Mainlayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
           <div>
           <Navigation></Navigation>
           </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Mainlayout;