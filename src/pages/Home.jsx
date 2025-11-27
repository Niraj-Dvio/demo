import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Play, MapPin } from "lucide-react";
import {
  services,
  clients,
  caseStudies,
  testimonials,
  awards,
  blogs,
  locations,
} from "../data/mockData";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0a0e27] via-[#1a1d3e] to-[#2d1b4e]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(236, 72, 153, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: `translateY(${scrollPosition * 0.5}px)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 italic">
            DRIVING INNOVATION, DELIVERING EXCELLENCE
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Product engineering solutions from a global digital transformation
            company for diverse industries
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="px-6 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 rounded-full font-semibold">
              AI
            </span>
            <span className="px-6 py-2 bg-yellow-500/20 border border-yellow-400 text-yellow-400 rounded-full font-semibold">
              CLOUD
            </span>
            <span className="px-6 py-2 bg-pink-500/20 border border-pink-400 text-pink-400 rounded-full font-semibold">
              DATA
            </span>
          </div>

          <Button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg font-medium">
            Consult our Experts
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Digital
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-pink-500">
                Transformation
              </span>{" "}
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-cyan-500 hover:text-cyan-600 font-semibold inline-flex items-center gap-2 group/link"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Driving Digital Excellence
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-pink-500">
              for Leading Brands
            </span>{" "}
            Worldwide
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-12">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-24 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-2xl font-bold text-gray-400">
                    {client.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real-world Transformations through Digital Innovation
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We have partnered with brands across industries to deliver
              measurable results with innovative product engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-2">
                      <span className="font-bold text-gray-800">
                        {study.logo}
                      </span>
                    </div>
                    <span className="text-white text-sm">{study.country}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-cyan-500 text-sm font-semibold">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">
                    {study.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 rounded-full text-lg font-medium"
            >
              See all Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Testimonials from our Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 group cursor-pointer">
                  <img
                    src={testimonial.videoThumb}
                    alt={testimonial.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-pink-500 ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-600">
                        {testimonial.logo}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.client}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    "{testimonial.quote}"
                  </h3>
                  <p className="text-sm text-gray-600">
                    <strong>{testimonial.person}</strong>
                    <br />
                    {testimonial.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Awards and Recognitions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-cyan-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-3xl">🏆</div>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {award.org}
                </p>
                <p className="text-xs text-gray-500">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Blogs & Insights
              </h2>
              <p className="text-gray-600">Latest from our blog</p>
            </div>
            <Link to="/blogs">
              <Button
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                View All Blogs
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-cyan-500 text-xs font-semibold">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    by {blog.author} • {blog.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Global Locations
          </h2>
          <p className="text-center text-gray-600 mb-16">
            We operate from 6 strategic locations worldwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card
                key={location.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {location.city}
                  </h3>
                  <p className="text-sm text-gray-600">{location.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#0a0e27] to-[#2d1b4e]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Want to know more about us and our services? Let's start a
            conversation.
          </p>
          <Link to="/contact-us">
            <Button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
