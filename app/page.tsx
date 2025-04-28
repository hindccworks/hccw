import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Clock, Leaf, Shield, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="stagger-children">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4">
              Ancient Wisdom for Modern Wellness
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Discover the authentic Ayurvedic remedies from Hind Tel, crafted with traditional methods since 1933.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/heritage">Our Heritage</Link>
              </Button>
            </div>
            <div className="flex items-center mt-8 space-x-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                      alt="Customer"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-ayurveda-turmeric text-ayurveda-turmeric" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Trusted by thousands since 1933</p>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Ayurvedic Products"
              width={600}
              height={600}
              className="relative rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Heritage Banner */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">A Heritage of Healing Since 1933</h2>
          <p className="max-w-3xl mx-auto text-primary-foreground/90">
            Hind Chemical Curative Works has been preserving the ancient wisdom of Ayurveda for over 90 years, crafting
            authentic remedies that stand the test of time.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Signature Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved formulations, crafted with care using time-honored techniques and the finest
              natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ayurvedic Hair Oil",
                description: "Traditional blend of herbs to nourish and strengthen hair roots.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Digestive Wellness Tonic",
                description: "Ancient formula to support digestive health and metabolism.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Joint Relief Balm",
                description: "Soothing herbal balm for joint comfort and mobility.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Hind Tel Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets our heritage Ayurvedic formulations apart from modern alternatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Time-Tested Formulations",
                description:
                  "Our recipes have remained unchanged since 1933, preserving the authentic efficacy of traditional Ayurveda.",
              },
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: "100% Natural Ingredients",
                description:
                  "We source only the finest herbs and natural ingredients, with no artificial additives or preservatives.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Heritage Craftsmanship",
                description:
                  "Our products are crafted using traditional methods passed down through generations of Ayurvedic practitioners.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control ensures that every product meets our exacting standards for purity and potency.",
              },
              {
                icon: <Star className="h-10 w-10 text-primary" />,
                title: "Proven Results",
                description:
                  "Decades of customer testimonials attest to the effectiveness of our time-honored formulations.",
              },
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: "Sustainable Practices",
                description:
                  "We honor our connection to nature through ethical sourcing and environmentally conscious production methods.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from those who have experienced the benefits of our heritage Ayurvedic products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                location: "Delhi",
                quote:
                  "I've been using Hind Tel's hair oil for over 20 years. Nothing else compares to its quality and effectiveness.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Priya Patel",
                location: "Mumbai",
                quote:
                  "The joint relief balm has been a blessing for my mother. It's remarkable how these traditional formulas still work better than modern alternatives.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Amit Verma",
                location: "Kolkata",
                quote:
                  "My family has trusted Hind Tel products for three generations. Their commitment to quality and tradition is unmatched.",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-ayurveda-turmeric text-ayurveda-turmeric" />
                    ))}
                  </div>
                  <blockquote className="flex-1 mb-6 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Through Time</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the rich history of Hind Chemical Curative Works since its founding in 1933
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

            <div className="space-y-12">
              {[
                {
                  year: "1933",
                  title: "The Beginning",
                  description:
                    "Hind Chemical Curative Works was founded by Ayurvedic practitioner Dr. Raman Sharma in Delhi.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "1950s",
                  title: "Expanding Horizons",
                  description: "The brand expanded its product line and began distributing across Northern India.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "1975",
                  title: "Second Generation",
                  description:
                    "The founder's son took over the business, maintaining the traditional formulations while modernizing production.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "2000",
                  title: "Heritage Brand Status",
                  description:
                    "Hind Tel was recognized as a heritage brand, preserving traditional Ayurvedic knowledge.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "Present",
                  title: "Continuing the Legacy",
                  description:
                    "Now in its third generation, Hind Tel continues to craft authentic Ayurvedic remedies while reaching a global audience.",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} gap-8`}>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-background rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={milestone.image || "/placeholder.svg"}
                          alt={milestone.title}
                          width={400}
                          height={300}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10">
                      {milestone.year.substring(0, 2)}
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-background p-6 rounded-lg shadow-md">
                        <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Wisdom of Ayurveda</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Discover our heritage collection of authentic Ayurvedic remedies, crafted with care and tradition since
            1933.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link href="/products">
              Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
