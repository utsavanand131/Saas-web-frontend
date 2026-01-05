import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-500 text-slate-900">
      <Navbar />
      <AppRoutes />
    </div>
  );
}
