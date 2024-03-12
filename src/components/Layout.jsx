import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function Layout() {
    return (
        <div className="max-w-6xl mx-auto">
            <Header />
            <Hero />
            <Footer />
        </div>
        );
}