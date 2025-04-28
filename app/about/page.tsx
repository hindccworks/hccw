import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Clock, Leaf, Shield, Star } from "lucide-react"

export const metadata = {
  title: "About Us | Hind Tel - Heritage Ayurvedic Brand",
  description:
    "Learn about Hind Chemical Curative Works, the heritage Ayurvedic brand established in 1933 with a commitment to authentic traditional remedies.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4">Our Story</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the rich heritage of Hind Chemical Curative Works, preserving Ayurvedic traditions since 1933.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At Hind Chemical Curative Works, our mission is to preserve and share the ancient wisdom of Ayurveda
                through authentic, time-tested formulations that promote holistic wellness.
              </p>
              <p className="text-muted-foreground mb-6">
                For over nine decades, we have remained committed to the traditional methods and principles that have
                made Ayurveda one of the world's oldest and most respected healing systems.
              </p>
              <p className="text-muted-foreground">
                We believe in the power of nature's pharmacy and the importance of maintaining the purity and integrity
                of these ancient remedies for generations to come.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Our Mission"
                width={600}
                height={600}
                className="relative rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that have guided Hind Tel for over 90 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: "Authenticity",
                description:
                  "We remain true to traditional Ayurvedic formulations, preserving ancient wisdom without compromise.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Quality",
                description:
                  "We source only the finest natural ingredients and maintain rigorous quality standards in every product.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Heritage",
                description: "We honor our rich history and the generations of expertise that inform our craft.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description: "We operate with transparency and honesty in all aspects of our business.",
              },
              {
                icon: <Star className="h-10 w-10 text-primary" />,
                title: "Sustainability",
                description:
                  "We respect nature's gifts through ethical sourcing and environmentally conscious practices.",
              },
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: "Wellness",
                description:
                  "We are dedicated to promoting holistic health and well-being through Ayurvedic principles.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4 p-3 inline-block rounded-full bg-primary/10">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dedicated individuals preserving our heritage and crafting authentic Ayurvedic remedies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Vikram Sharma",
                role: "Managing Director & Chief Ayurvedic Practitioner",
                bio: "Third-generation leader of Hind Chemical Curative Works with over 30 years of experience in Ayurvedic medicine.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. Ananya Patel",
                role: "Head of Research & Development",
                bio: "Ayurvedic physician with a doctorate in traditional medicine, dedicated to preserving authentic formulations.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Rajesh Gupta",
                role: "Master Herbalist",
                bio: "With 40 years of experience, Rajesh oversees the sourcing and processing of our premium herbs and ingredients.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. Meera Singh",
                role: "Quality Assurance Director",
                bio: "Ensures that every Hind Tel product meets our exacting standards for purity, potency, and authenticity.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Arjun Verma",
                role: "Production Manager",
                bio: "Maintains the traditional manufacturing processes while implementing modern quality control standards.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Kapoor",
                role: "Ayurvedic Consultant",
                bio: "Provides expert guidance on product formulations and customer wellness recommendations.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Facility</h2>
              <p className="text-muted-foreground mb-6">
                Our production facility blends traditional methods with modern standards, creating a space where ancient
                wisdom meets contemporary quality control.
              </p>
              <p className="text-muted-foreground mb-6">
                We maintain dedicated areas for herb processing, traditional preparation methods, and quality testing,
                ensuring that every product meets our exacting standards while honoring time-tested techniques.
              </p>
              <p className="text-muted-foreground">
                Located in the same region where we began in 1933, our facility is a testament to our commitment to
                preserving heritage while embracing responsible innovation.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our Facility"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Heritage</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Discover the authentic Ayurvedic remedies that have stood the test of time since 1933.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
