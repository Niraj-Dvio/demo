import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Search, Filter } from "lucide-react";
import { blogs } from "../data/mockData";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("Latest");

  const categories = [
    "All",
    "Cloud",
    "DevOps",
    "AI",
    "Digital Engineering",
    "Data Analytics",
    "Marketing",
  ];
  const years = ["Latest", "2025", "2024", "2023", "2022", "2021"];

  const allBlogs = [
    ...blogs,
    {
      id: 5,
      title: "Modern DevOps Practices for Scalable Applications",
      category: "Blog",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      date: "October 15, 2025",
      author: "David Miller",
    },
    {
      id: 6,
      title: "The Future of AI in Enterprise Software",
      category: "Blog",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      date: "October 5, 2025",
      author: "Sarah Johnson",
    },
    {
      id: 7,
      title: "Cloud Migration Strategies for Legacy Systems",
      category: "Whitepaper",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      date: "September 28, 2025",
      author: "Tom Anderson",
    },
    {
      id: 8,
      title: "Building Resilient Microservices Architecture",
      category: "Blog",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      date: "September 20, 2025",
      author: "Jennifer Lee",
    },
    {
      id: 9,
      title: "Data Engineering Best Practices for 2025",
      category: "Blog",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      date: "September 10, 2025",
      author: "Mark Taylor",
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-linear-to-br from-[#0a0e27] via-[#1a1d3e] to-[#2d1b4e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(236, 72, 153, 0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Blogs
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Told you, we love sharing!
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4 items-center flex-wrap">
              <Filter className="text-gray-600" size={20} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-linear-to-r from-cyan-500 to-pink-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div className="flex gap-2 mt-6 flex-wrap">
            <span className="text-gray-600 font-medium">Sort By:</span>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-1 rounded-full text-sm transition-all ${
                  selectedYear === year
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>by {blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 rounded-full text-lg font-medium"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-12 bg-linear-to-br from-[#0a0e27] to-[#2d1b4e] text-white border-0">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-300 mb-8">
                Be the first to know - subscribe to actionable insights that
                matter.
              </p>

              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <Button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-medium">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
