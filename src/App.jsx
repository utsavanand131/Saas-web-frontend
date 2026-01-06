import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-800 text-slate-900">
      <Navbar />
      <AppRoutes />
      <Footer />

    </div>
  );
}
