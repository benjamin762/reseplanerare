import { NavLink } from "react-router-dom";

export default function Header () {
    return <header>
        <img src="" alt="logo" />
        <h1> The Travel Planner </h1>
        <div> The best application for planning your travels. </div>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/help"> Help </NavLink>
        <NavLink to="/plans"> Plans </NavLink>
    </header>
}