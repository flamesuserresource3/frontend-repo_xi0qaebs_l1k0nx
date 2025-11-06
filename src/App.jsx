import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductShowcase from './components/ProductShowcase';
import LookbookMarquee from './components/LookbookMarquee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-16">
        <Hero3D />
        <ProductShowcase />
        <LookbookMarquee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
