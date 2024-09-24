import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Book,
  Bookmark,
  ChevronRight,
  Feather,
  Pen,
  TrendingUp,
  Newspaper,
  Music,
  Film,
  Camera,
  Star,
  Clock,
  Users,
  Lightbulb,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="">
        <header className="px-6 lg:px-8 h-20 flex items-center justify-between bg-primary text-primary-foreground">
          <Link
            href="#"
            className="flex items-center space-x-2"
            prefetch={false}
          >
            <Feather className="h-8 w-8" />
            <span className="font-bold text-xl tracking-tight">
              Quill Publishing
            </span>
          </Link>
          <nav className="flex gap-6 sm:gap-8">
            {["Features", "Discover", "Pricing", "About"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4 transition-colors"
                prefetch={false}
              >
                {item}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                <div className="flex flex-col justify-center space-y-8">
                  <Badge className="w-fit text-sm bg-opacity-40 bg-white text-purple-200 backdrop-filter backdrop-blur-sm">
                    Revolutionizing Publishing
                  </Badge>
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
                    Unlock Your Publishing Potential
                  </h1>
                  <p className="max-w-[600px] text-xl md:text-2xl text-gray-200 leading-relaxed">
                    Quill Publishing empowers writers to bring their ideas to
                    life. Craft, format, and publish captivating content with
                    unparalleled ease.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="text-primary bg-white hover:bg-gray-100"
                    >
                      Get Started
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="text-white border-white hover:bg-white/20"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                  <Image
                    src="https://cdn.dribbble.com/users/746931/screenshots/8803958/media/9e1eee2e16d7afc8875438687a31cecc.png?resize=1200x900&vertical=center"
                    alt="Hero"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl shadow-2xl"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="mb-4">Key Features</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-4">
                  Elevate Your Publishing Experience
                </h2>
                <p className="text-xl text-gray-600 max-w-[900px] mx-auto leading-relaxed">
                  Quill Publishing offers a suite of powerful tools to help you
                  create, format, and publish content with unprecedented ease
                  and professionalism.
                </p>
              </div>
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Intuitive Editor",
                    content:
                      "Craft your content with a user-friendly, distraction-free editor.",
                    icon: Pen,
                  },
                  {
                    title: "Smart Formatting",
                    content:
                      "Easily apply professional-grade formatting to your articles, books, and more.",
                    icon: Book,
                  },
                  {
                    title: "Powerful Analytics",
                    content:
                      "Gain valuable insights into your content's performance and audience engagement.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Collaboration Tools",
                    content:
                      "Work seamlessly with editors, co-authors, and beta readers.",
                    icon: Users,
                  },
                  {
                    title: "Publishing Scheduler",
                    content:
                      "Plan and automate your content releases for maximum impact.",
                    icon: Clock,
                  },
                  {
                    title: "AI-Assisted Writing",
                    content:
                      "Get intelligent suggestions to enhance your writing style and grammar.",
                    icon: Lightbulb,
                  },
                ].map((feature) => (
                  <Card
                    key={feature.title}
                    className="bg-white hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Discover Section */}
          <section id="discover" className="w-full py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="mb-4">Discover</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-4">
                  Explore Captivating Content
                </h2>
                <p className="text-xl text-gray-600 max-w-[900px] mx-auto leading-relaxed">
                  Dive into a world of creativity with our curated selection of
                  trending articles, featured authors, and popular collections.
                </p>
              </div>
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {/* Trending Now */}
                <Card className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      Trending Now
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        { title: "The Art of Storytelling", icon: Book },
                        {
                          title: "Mastering SEO for Writers",
                          icon: TrendingUp,
                        },
                        {
                          title: "The Future of Digital Publishing",
                          icon: Newspaper,
                        },
                      ].map((item) => (
                        <li key={item.title}>
                          <Link
                            href="#"
                            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            prefetch={false}
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="h-5 w-5 text-primary" />
                              <span className="font-medium text-gray-900">
                                {item.title}
                              </span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Featured Authors */}
                <Card className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                      <Star className="h-6 w-6 text-primary" />
                      Featured Authors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { name: "John Doe", role: "Fiction Writer" },
                        { name: "Jane Smith", role: "Lifestyle Blogger" },
                        { name: "Alex Johnson", role: "Tech Journalist" },
                        { name: "Emily Brown", role: "Poet" },
                      ].map((author) => (
                        <Link
                          key={author.name}
                          href="#"
                          className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                          prefetch={false}
                        >
                          <Avatar className="w-20 h-20 mb-3 border-4 border-primary">
                            <AvatarImage
                              src={`https://i.pravatar.cc/80?u=${author.name}`}
                            />
                            <AvatarFallback>
                              {author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <h4 className="font-medium text-gray-900 text-center">
                            {author.name}
                          </h4>
                          <p className="text-sm text-gray-600 text-center">
                            {author.role}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Genres */}
                <Card className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                      <Bookmark className="h-6 w-6 text-primary" />
                      Popular Genres
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Fiction", icon: Book },
                        { name: "Poetry", icon: Feather },
                        { name: "Nonfiction", icon: Pen },
                        { name: "Memoir", icon: Bookmark },
                        { name: "Music", icon: Music },
                        { name: "Film", icon: Film },
                        { name: "Photography", icon: Camera },
                        { name: "Journalism", icon: Newspaper },
                      ].map((genre) => (
                        <Link
                          key={genre.name}
                          href="#"
                          className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                          prefetch={false}
                        >
                          <genre.icon className="h-8 w-8 mb-2 text-primary" />
                          <h4 className="font-medium text-center text-gray-900">
                            {genre.name}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Writing Tips Section */}
          <section className="w-full py-20 md:py-32 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="mb-4">Pro Tips</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
                  Writing Tips from the Pros
                </h2>
                <p className="text-xl text-gray-600 max-w-[900px] mx-auto leading-relaxed">
                  Enhance your writing skills with invaluable advice from
                  experienced authors and editors.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Develop a Writing Routine",
                    content:
                      "Consistency is key. Set aside dedicated time each day for writing, even if it's just for 30 minutes.",
                    icon: Clock,
                  },
                  {
                    title: "Read Widely",
                    content:
                      "The best writers are also avid readers. Explore various genres to broaden your perspective and improve your craft.",
                    icon: Book,
                  },
                  {
                    title: "Embrace Revision",
                    content:
                      "First drafts are rarely perfect. Don't be afraid to revise and refine your work multiple times.",
                    icon: Pen,
                  },
                  {
                    title: "Show, Don't Tell",
                    content:
                      "Use vivid descriptions and sensory details to bring your stories to life, rather than simply stating facts.",
                    icon: Camera,
                  },
                  {
                    title: "Know Your Audience",
                    content:
                      "Understanding who you're writing for can help you tailor your content and connect with readers more effectively.",
                    icon: Users,
                  },
                  {
                    title: "Experiment with Different Styles",
                    content:
                      "Try writing in various styles and voices to find what works best for you and your story.",
                    icon: Feather,
                  },
                ].map((tip, index) => (
                  <Card
                    key={index}
                    className="bg-white hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <tip.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tip.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
