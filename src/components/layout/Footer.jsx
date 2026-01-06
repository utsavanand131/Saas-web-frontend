import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <span className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">SaaSify</span>. All rights reserved.
          </span>

          {/* Right */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
