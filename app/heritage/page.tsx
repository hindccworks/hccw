import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Heritage | Hind Tel - Heritage Ayurvedic Brand",
  description:
    "Explore the rich heritage of Hind Chemical Curative Works since 1933, preserving authentic Ayurvedic traditions for generations.",
}

export default function HeritagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4">Our Heritage</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A journey through time: The story of Hind Chemical Curative Works since 1933
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Founding Story</h2>
              <p className="text-muted-foreground mb-6">
                In 1933, amidst the growing influence of Western medicine in India, Dr. Raman Sharma, a respected
                Ayurvedic practitioner, established Hind Chemical Curative Works with a mission to preserve the
                authentic traditions of Ayurveda.
              </p>
              <p className="text-muted-foreground mb-6">
                Born into a family of Ayurvedic physicians whose lineage stretched back generations, Dr. Sharma had
                witnessed the gradual erosion of traditional healing practices. Determined to safeguard this ancient
                wisdom, he began crafting remedies using time-honored formulations passed down through his family.
              </p>
              <p className="text-muted-foreground">
                The name "Hind Tel" was chosen to represent the essence of Indian (Hind) oils (Tel), reflecting the
                company's initial focus on therapeutic oils that formed the cornerstone of many Ayurvedic treatments.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Founding Story"
                width={600}
                height={600}
                className="relative rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Through Time</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the key milestones in our nine-decade history of preserving Ayurvedic traditions
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
                    "Dr. Raman Sharma establishes Hind Chemical Curative Works in Delhi, focusing initially on therapeutic oils.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "1940s",
                  title: "Surviving Partition",
                  description:
                    "Despite the challenges of India's partition, the company maintains its commitment to Ayurvedic traditions.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "1950s",
                  title: "Expanding Horizons",
                  description:
                    "The product line expands to include herbal supplements and traditional formulations, with distribution across Northern India.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "1975",
                  title: "Second Generation",
                  description:
                    "Dr. Sharma's son, Vikram Sharma Sr., takes over the business, maintaining traditional formulations while modernizing production.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "1980s",
                  title: "Preserving Ancient Texts",
                  description:
                    "The company establishes a library of ancient Ayurvedic texts, ensuring the preservation of traditional knowledge.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "2000",
                  title: "Heritage Brand Status",
                  description:
                    "Hind Tel is officially recognized as a heritage brand, preserving traditional Ayurvedic knowledge.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "2010",
                  title: "Third Generation",
                  description:
                    "Dr. Vikram Sharma Jr. becomes the third-generation leader, blending respect for tradition with contemporary quality standards.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  year: "Present",
                  title: "Continuing the Legacy",
                  description:
                    "Hind Tel continues to craft authentic Ayurvedic remedies while reaching a global audience interested in traditional wellness.",
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

      {/* Traditional Methods */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preserving Traditional Methods</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we maintain authentic Ayurvedic practices in our modern production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hand-Selected Ingredients",
                description:
                  "Our herbs are carefully selected by experienced herbalists who evaluate them using traditional parameters of quality.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Traditional Processing",
                description:
                  "We maintain traditional processing methods like slow cooking in copper vessels to preserve the full spectrum of herbal benefits.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Seasonal Harvesting",
                description:
                  "Following Ayurvedic principles, we harvest herbs during specific seasons when their medicinal properties are at their peak.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Ancient Formulations",
                description:
                  "Our recipes remain unchanged from those documented in classical Ayurvedic texts, ensuring authenticity and efficacy.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Moon Phase Considerations",
                description:
                  "Certain preparations are made according to lunar cycles, following traditional Ayurvedic timing for optimal potency.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Generational Knowledge Transfer",
                description:
                  "Our production methods are passed down through direct apprenticeship, preserving nuances that cannot be documented.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((method, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-video relative">
                  <Image src={method.image || "/placeholder.svg"} alt={method.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Heritage Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual journey through our history and traditional practices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Gallery+${index + 1}`}
                  alt={`Heritage Gallery Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Generational Trust</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Families who have trusted Hind Tel products across multiple generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "The Sharma Family",
                generations: "Three Generations",
                quote:
                  "My grandfather first used Hind Tel's hair oil in the 1940s. Now, my son uses the same formula. The quality has remained consistent for over 70 years.",
                image: "/placeholder.svg?height=120&width=120",
              },
              {
                name: "The Patel Family",
                generations: "Four Generations",
                quote:
                  "Our family's connection with Hind Tel began when my great-grandmother sought relief for joint pain. Four generations later, we still trust their traditional balm.",
                image: "/placeholder.svg?height=120&width=120",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-primary font-medium mb-1">{testimonial.generations}</div>
                    <h3 className="text-xl font-semibold mb-3">{testimonial.name}</h3>
                    <blockquote className="italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become Part of Our Heritage</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Experience the authentic Ayurvedic remedies that have been trusted by generations since 1933.
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
