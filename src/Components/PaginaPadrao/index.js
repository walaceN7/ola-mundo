import Banner from "Components/Banner";
import { Outlet } from "react-router-dom";

const PaginaPadrao = ({ children }) => {
    return (
        <main>
            <Banner />

            <Outlet />
            {children}
        </main>
    );
}

export default PaginaPadrao;