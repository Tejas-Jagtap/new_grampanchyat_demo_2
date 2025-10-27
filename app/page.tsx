import Hero from "@/components/Hero";
import News from "@/components/News";
import Officials from "@/components/Officials";
import Departments from "@/components/Departments";
import Schemes from "@/components/Schemes";
import Gallery from "@/components/Gallery";
import Weather from "@/components/Weather";
import Statistics from "@/components/Statistics";
import Dashboard from "@/components/Dashborad";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Officials - Full Width */}
        <Officials />
        {/* Statistics - Full Width */}
        {/* <Statistics /> */}

        <Dashboard />
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <News />
          </div>
          <div>
            <Schemes />
          </div>
        </div>

        {/* Weather - Full Width Horizontal */}
        <Weather />
      </div>
    </main>
  );
}
