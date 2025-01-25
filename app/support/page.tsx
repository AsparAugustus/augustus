export default function SupportPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Support</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How Can We Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you with any questions or concerns you may have.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
             
              </div>

              <div className="p-6 rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-2">Discord Community</h3>
                <p className="text-muted-foreground mb-4">
                  Join our Discord community for real-time support and discussions.
                </p>
                <a href="/discord" className="text-secondary hover:underline">
                  Join Discord
                </a>
              </div>

              <div className="p-6 rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">Browse our comprehensive documentation and guides.</p>
                <a href="/docs" className="text-secondary hover:underline">
                  View Docs
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What services does Augustus provide?</h3>
                <p className="text-muted-foreground">
                  Augustus specializes in community management and meme marketing for Web3 projects.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How do I get started?</h3>
                <p className="text-muted-foreground">
                  Book a free consultation through our Calendly link and we'll discuss your project needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What are your working hours?</h3>
                <p className="text-muted-foreground">
                  Our team operates 24/7 across multiple time zones to ensure continuous support.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

