import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "Combined Investment & Insurance",
      description: "Insurance products combined with investments (unit-linked insurance or insurance-based investment products – IBIPs)."
    },
    {
      title: "Pure Risk Coverage Product",
      description: "We have created products focusing on potential life and health-related risks with the same emphasis on innovation that we apply to all of the business."
    },
    {
      title: "Italian Tax Supported Investment Plan",
      description: "We offer an insurance product for Italian residents compatible with so-called Individual Savings Plan regulation."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">NOVIS' Innovations</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our solution is designed to meet clients' insurance and investment needs while utilizing tax and social benefit incentives granted by local governments and complying with market-specific regulations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-emerald-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
