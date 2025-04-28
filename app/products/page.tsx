import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Filter, Search } from "lucide-react"

export const metadata = {
  title: "Products | Hind Tel - Heritage Ayurvedic Brand",
  description:
    "Explore our authentic Ayurvedic products from Hind Tel, crafted with traditional methods since 1933. Discover oils, herbs, wellness products, and more.",
}

const productCategories = [
  {
    name: "Ayurvedic Oils",
    slug: "oils",
    description: "Traditional oil formulations for various wellness needs",
    image: "/placeholder.svg?height=300&width=300",
    products: 12,
  },
  {
    name: "Herbal Supplements",
    slug: "herbs",
    description: "Natural supplements derived from ancient formulations",
    image: "/placeholder.svg?height=300&width=300",
    products: 18,
  },
  {
    name: "Wellness Products",
    slug: "wellness",
    description: "Holistic wellness solutions for modern living",
    image: "/placeholder.svg?height=300&width=300",
    products: 15,
  },
  {
    name: "Natural Skincare",
    slug: "skincare",
    description: "Ayurvedic skincare for natural beauty and health",
    image: "/placeholder.svg?height=300&width=300",
    products: 9,
  },
  {
    name: "Traditional Formulations",
    slug: "traditional",
    description: "Classic Ayurvedic preparations from ancient texts",
    image: "/placeholder.svg?height=300&width=300",
    products: 21,
  },
]

const featuredProducts = [
  {
    name: "Keshavardhak Hair Oil",
    category: "Ayurvedic Oils",
    description: "Traditional blend of herbs to nourish and strengthen hair roots.",
    price: "₹450",
    image: "/placeholder.svg?height=300&width=300",
    slug: "keshavardhak-hair-oil",
  },
  {
    name: "Pachak Digestive Tonic",
    category: "Wellness Products",
    description: "Ancient formula to support digestive health and metabolism.",
    price: "₹380",
    image: "/placeholder.svg?height=300&width=300",
    slug: "pachak-digestive-tonic",
  },
  {
    name: "Sandhi Balm",
    category: "Traditional Formulations",
    description: "Soothing herbal balm for joint comfort and mobility.",
    price: "₹320",
    image: "/placeholder.svg?height=300&width=300",
    slug: "sandhi-balm",
  },
  {
    name: "Kumkumadi Face Oil",
    category: "Natural Skincare",
    description: "Luxurious facial oil for radiant, even-toned skin.",
    price: "₹550",
    image: "/placeholder.svg?height=300&width=300",
    slug: "kumkumadi-face-oil",
  },
  {
    name: "Triphala Churna",
    category: "Herbal Supplements",
    description: "Classic three-fruit formula for digestive and overall health.",
    price: "₹280",
    image: "/placeholder.svg?height=300&width=300",
    slug: "triphala-churna",
  },
  {
    name: "Ashwagandha Capsules",
    category: "Herbal Supplements",
    description: "Traditional adaptogen for stress relief and vitality.",
    price: "₹420",
    image: "/placeholder.svg?height=300&width=300",
    slug: "ashwagandha-capsules",
  },
  {
    name: "Brahmi Brain Tonic",
    category: "Wellness Products",
    description: "Ancient herb blend to support cognitive function and memory.",
    price: "₹490",
    image: "/placeholder.svg?height=300&width=300",
    slug: "brahmi-brain-tonic",
  },
  {
    name: "Neem Face Wash",
    category: "Natural Skincare",
    description: "Purifying cleanser for clear, balanced skin.",
    price: "₹350",
    image: "/placeholder.svg?height=300&width=300",
    slug: "neem-face-wash",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4">Our Products</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our authentic Ayurvedic remedies, crafted with traditional methods since 1933.
          </p>

          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our range of authentic Ayurvedic products across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-white/80 mb-2">{category.description}</p>
                      <p className="text-xs text-white/60">{category.products} products</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/products/${category.slug}`}>View Category</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our most popular traditional formulations</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-1">{product.category}</div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/products/${product.slug}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products/all">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Benefits of Traditional Formulations</h2>
              <p className="text-muted-foreground mb-6">
                Our products are crafted using time-honored techniques and authentic ingredients, preserving the full
                spectrum of benefits that Ayurvedic tradition offers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Holistic Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional formulations address the root cause rather than just symptoms, promoting overall
                      balance and wellness.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Time-Tested Efficacy</h3>
                    <p className="text-sm text-muted-foreground">
                      Our formulations have been refined over generations, with proven results that stand the test of
                      time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Natural Synergy</h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional preparations maintain the natural synergy between herbs and ingredients, enhancing
                      their collective benefits.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Minimal Side Effects</h3>
                    <p className="text-sm text-muted-foreground">
                      Our authentic formulations are designed to work in harmony with the body, minimizing adverse
                      effects common in modern alternatives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Traditional Formulations"
                width={600}
                height={600}
                className="relative rounded-lg object-cover"
              />
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
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
