import heroImg from "../../src/assets/hero-img.png"

export default function Hero() {
    return (
        <div className="py-12 bg-gray-300 px-8 flex justify-between items-center">
            <div className="hero-desc w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Tasker</h2>
                <p className="text-sm">Effortlessly Organize, Priorities, and Conquer Tasks with Tasker - Your Personal Productivity Ally for Seamless Goal Acheivement and Stress-Free Task Management.</p>
            </div>
            <div className="hero-image w-full md:w-1/2">
                <img className="" src={heroImg} alt="" />
            </div>
        </div>
        );
}