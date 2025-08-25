import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Announcements from '@/components/sections/Announcements';
import Products from '@/components/sections/Products';
import Events from '@/components/sections/Events';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Announcements />
        <Products />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
