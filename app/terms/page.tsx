export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Augustus's services, you accept and agree to be bound by the terms and provision of
              this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="text-muted-foreground mb-4">
              Augustus provides community management and meme marketing services. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Modify or discontinue any portion of our services</li>
              <li>Refuse service to anyone for any reason</li>
              <li>Change service fees upon notice</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Provide accurate information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not interfere with the proper working of the service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, features, and functionality of our services are owned by Augustus and are protected by
              international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
            <p className="text-muted-foreground">
              For any questions regarding these Terms & Conditions, please contact us at{" "}
              <a href="mailto:legal@augustus.com" className="text-secondary hover:underline">
                legal@augustus.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

