import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Hero />
        </div>
        );
}