import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-10 text-sm text-gray-500">
      <Container>
        <div className="flex justify-between">
          <span>© {new Date().getFullYear()} SaaSify</span>
          <div className="space-x-4">
            <a className="hover:text-black">Privacy</a>
            <a className="hover:text-black">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
