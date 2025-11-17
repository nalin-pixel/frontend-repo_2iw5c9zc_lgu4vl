import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Practices from './components/Practices';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Practices />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} YAWP — All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
