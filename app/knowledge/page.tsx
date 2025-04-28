import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react"

export const metadata = {
  title: "Ayurvedic Knowledge | Hind Tel - Heritage Ayurvedic Brand",
  description:
    "Explore the ancient wisdom of Ayurveda through our knowledge center. Learn about traditional practices, herbs, and wellness tips from Hind Tel, a heritage brand since 1933.",
}

const articles = [
  {
    title: "Understanding the Three Doshas: Vata, Pitta, and Kapha",
    excerpt:
      "Explore the fundamental principles of Ayurvedic constitution and how understanding your dosha can help you achieve balance.",
    author: "Dr. Vikram Sharma",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "understanding-three-doshas",
  },
  {
    title: "Seasonal Routines in Ayurveda: Adapting to Nature's Rhythms",
    excerpt:
      "Learn how to adjust your daily routines according to seasonal changes to maintain optimal health and prevent imbalances.",
    author: "Dr. Ananya Patel",
    date: "August 3, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "seasonal-routines-ayurveda",
  },
  {
    title: "The Ancient Art of Ayurvedic Oil Massage (Abhyanga)",
    excerpt:
      "Discover the benefits and techniques of self-massage with medicated oils, a cornerstone practice in Ayurvedic daily routine.",
    author: "Priya Kapoor",
    date: "September 21, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ayurvedic-oil-massage",
  },
  {
    title: "Herbs for Immunity: Traditional Ayurvedic Approaches",
    excerpt:
      "Explore the powerful immune-supporting herbs in the Ayurvedic pharmacopeia and how they've been used for centuries.",
    author: "Rajesh Gupta",
    date: "October 12, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "herbs-for-immunity",
  },
  {
    title: "Ayurvedic Dietary Principles for Modern Living",
    excerpt:
      "Learn how to apply ancient Ayurvedic dietary wisdom to navigate contemporary food choices and eating habits.",
    author: "Dr. Meera Singh",
    date: "November 5, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ayurvedic-dietary-principles",
  },
  {
    title: "The Science Behind Traditional Ayurvedic Formulations",
    excerpt:
      "Understand the sophisticated principles that guide the creation of complex herbal formulations in Ayurveda.",
    author: "Dr. Vikram Sharma",
    date: "December 18, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "science-behind-ayurvedic-formulations",
  },
]

export default function KnowledgePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4">
            Ayurvedic Knowledge Center
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore the ancient wisdom of Ayurveda through our collection of articles, guides, and resources
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-primary font-medium mb-2">Featured Article</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Timeless Principles of Ayurveda in Modern Wellness
              </h2>
              <p className="text-muted-foreground mb-6">
                Discover how the ancient wisdom of Ayurveda remains relevant and powerful in addressing contemporary
                health challenges. This comprehensive guide explores how traditional practices can be integrated into
                modern lifestyles for optimal wellbeing.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Dr. Vikram Sharma</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">January 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">15 min read</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/knowledge/timeless-principles-ayurveda">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Ayurvedic Principles"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Recent Articles</h2>
              <p className="text-muted-foreground">Explore our latest insights into Ayurvedic wisdom and practices</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline">
                <Link href="/knowledge/all">View All Articles</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((article, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/knowledge/${article.slug}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Resources */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ayurvedic Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Educational materials to deepen your understanding of Ayurvedic principles and practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dosha Assessment Guide",
                description:
                  "A comprehensive guide to help you determine your Ayurvedic constitution and understand your unique balance of doshas.",
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                link: "/knowledge/resources/dosha-assessment",
              },
              {
                title: "Seasonal Wellness Calendar",
                description:
                  "Month-by-month recommendations for diet, lifestyle, and self-care practices aligned with Ayurvedic seasonal wisdom.",
                icon: <Calendar className="h-10 w-10 text-primary" />,
                link: "/knowledge/resources/seasonal-calendar",
              },
              {
                title: "Herb & Spice Compendium",
                description:
                  "An illustrated guide to common Ayurvedic herbs and spices, their properties, and traditional uses in daily wellness.",
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                link: "/knowledge/resources/herb-compendium",
              },
              {
                title: "Daily Routine (Dinacharya) Guide",
                description:
                  "Step-by-step instructions for establishing an Ayurvedic daily routine to optimize health and energy.",
                icon: <Clock className="h-10 w-10 text-primary" />,
                link: "/knowledge/resources/daily-routine",
              },
              {
                title: "Ayurvedic Cooking Basics",
                description:
                  "Learn the principles of Ayurvedic cooking, including food combinations, spice usage, and meal planning by dosha.",
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                link: "/knowledge/resources/cooking-basics",
              },
              {
                title: "Meditation & Pranayama Practices",
                description:
                  "Audio guides and instructions for traditional breathing and meditation techniques recommended in Ayurveda.",
                icon: <User className="h-10 w-10 text-primary" />,
                link: "/knowledge/resources/meditation-pranayama",
              },
            ].map((resource, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={resource.link}>Access Resource</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Ayurvedic Wisdom Newsletter</h2>
            <p className="text-primary-foreground/90 mb-8">
              Receive monthly insights, seasonal wellness tips, and exclusive content from our Ayurvedic experts
              directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-full flex-1 text-foreground"
                required
              />
              <Button type="submit" variant="secondary" size="lg" className="rounded-full">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/70 mt-4">
              By subscribing, you agree to receive our newsletter and accept our Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions About Ayurveda</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answers to frequently asked questions about Ayurvedic principles and practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is Ayurveda?",
                answer:
                  "Ayurveda is one of the world's oldest holistic healing systems, developed in India over 5,000 years ago. The term comes from Sanskrit words 'ayur' (life) and 'veda' (knowledge), focusing on promoting good health rather than fighting disease.",
              },
              {
                question: "What are the three doshas?",
                answer:
                  "The three doshas—Vata, Pitta, and Kapha—are energetic forces that make up every individual's constitution. Vata governs movement, Pitta metabolism and transformation, and Kapha structure and lubrication.",
              },
              {
                question: "How do I determine my dosha type?",
                answer:
                  "Your dominant dosha is determined by a combination of physical characteristics, mental tendencies, and behavioral patterns. While online quizzes can provide initial insights, a consultation with an Ayurvedic practitioner offers the most accurate assessment.",
              },
              {
                question: "Can Ayurveda work alongside modern medicine?",
                answer:
                  "Yes, Ayurveda can complement modern medical treatments as part of an integrative approach to health. Always inform both your conventional doctor and Ayurvedic practitioner about all treatments you're receiving.",
              },
              {
                question: "Are Ayurvedic herbs safe?",
                answer:
                  "When properly prescribed and prepared, Ayurvedic herbs are generally safe. However, like any medicinal substance, they should be used under appropriate guidance, especially if you have existing health conditions or are taking other medications.",
              },
              {
                question: "How long does it take to see results with Ayurvedic treatments?",
                answer:
                  "The timeline varies depending on the condition, its severity, and individual factors. Some people experience improvements in a few weeks, while chronic conditions may require several months of consistent treatment and lifestyle adjustments.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Authentic Ayurveda</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our heritage collection of authentic Ayurvedic remedies, crafted with care and tradition since
            1933.
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
