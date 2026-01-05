import Container from "../layout/Container";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-slate-700 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
