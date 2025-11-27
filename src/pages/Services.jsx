import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Code,
  Cloud,
  Database,
  Palette,
  Tv,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const serviceDetails = [
    {
      icon: <Code className="text-cyan-500" size={48} />,
      title: "Generative AI Services",
      tagline: "Driving innovation with intelligent workflows",
      description:
        "Empowering businesses to build smarter products, automate operations, and deliver hyper-personalized experiences",
      features: [
        "LLM Engineering",
        "Agentic AI",
        "GenAI Integrations",
        "AI Chatbots",
        "AI Content Automation",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
      icon: <Code className="text-purple-500" size={48} />,
      title: "Digital Engineering",
      tagline: "Leader in ER&D Ratings",
      description:
        "Building disruptive applications and products by leveraging cutting-edge digital technologies with an Agile approach",
      features: [
        "UX/UI Design",
        "Frontend Development",
        "API Development",
        "Web Applications",
        "Mobile Apps",
        "Quality Engineering",
      ],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      icon: <Cloud className="text-blue-500" size={48} />,
      title: "Cloud & DevOps",
      tagline: "AWS Premier Consulting Partner",
      description:
        "Leveraging our deep expertise in Cloud to help customers define, execute and manage their Cloud journey",
      features: [
        "DevOps Automation",
        "SRE",
        "Cloud Migration",
        "Cloud Consulting",
        "24x7 Managed Services",
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
    {
      icon: <Database className="text-green-500" size={48} />,
      title: "Data Analytics & AI",
      tagline: "Transform data into insights",
      description:
        "Unlock the power of your data with advanced analytics, machine learning, and AI solutions",
      features: [
        "Data Engineering",
        "BI & Data Analysis",
        "Data Science",
        "Snowflake Services",
        "Databricks",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      icon: <Palette className="text-pink-500" size={48} />,
      title: "CX & Content",
      tagline: "Adobe and Acquia Partner",
      description:
        "Delivering end-to-end customer experience transformation journeys with a user-centric approach",
      features: [
        "Customer Experience",
        "Web Content Management",
        "Drupal Development",
        "Adobe Experience Manager",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      icon: <Tv className="text-red-500" size={48} />,
      title: "Media & Entertainment",
      tagline: "End-to-end OTT solutions",
      description:
        "Comprehensive solutions for media and entertainment industry including OTT platforms and SmartTV applications",
      features: [
        "OTT Platform Development",
        "SmartTV Solutions",
        "Media Services",
        "Managed Services",
      ],
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    },
    {
      icon: <TrendingUp className="text-orange-500" size={48} />,
      title: "Digital Marketing",
      tagline: "Award-winning MarTech expertise",
      description:
        "Driving measurable results by combining automation, analytics, and technology",
      features: [
        "SEO/SEM",
        "Creative & Design",
        "Media Planning",
        "Email & Marketing Automation",
        "Digital Analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
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
            Services
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Digital transformation & Product Engineering services for customers
            around the globe
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Overview and Our Services
            </h2>
            <p className="text-lg text-gray-600">
              We help Internet-based businesses and product companies design and
              develop cloud-native web and mobile solutions. We drive digital
              engineering initiatives for businesses by helping them provide a
              rich, seamless experience to their customers across digital
              channels resulting in higher engagement, efficiency, and
              profitability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <Card className="overflow-hidden h-full shadow-2xl border-0">
                    <div className="relative h-96">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                    </div>
                  </Card>
                </div>

                <div className="flex-1">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-cyan-500 font-semibold mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-linear-to-r from-cyan-500 to-pink-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium group">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform inline"
                    />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#0a0e27] to-[#2d1b4e]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your digital
            transformation goals
          </p>
          <Button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg font-medium">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
