export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Communication preferences</li>
              <li>Service usage information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Process your transactions</li>
              <li>Send you marketing and promotional materials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell or rent your personal information to third parties. We may share your information with
              service providers who assist us in operating our business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@augustus.com" className="text-secondary hover:underline">
                privacy@augustus.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

