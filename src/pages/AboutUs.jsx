import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Users, Target, Heart, Award, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="text-pink-500" size={40} />,
      title: "Authenticity",
      points: ["I mean what I say and do", "I own my mistakes and weaknesses"],
    },
    {
      icon: <Users className="text-cyan-500" size={40} />,
      title: "People Centricity",
      points: [
        "I value collaboration and teamwork",
        "Happiness and growth of people matter to me",
      ],
    },
    {
      icon: <Target className="text-yellow-500" size={40} />,
      title: "Customer Focus",
      points: [
        "I work with a nimble mindset",
        "I do whatever it takes to meet customer needs",
      ],
    },
    {
      icon: <Award className="text-purple-500" size={40} />,
      title: "Complete Ownership",
      points: [
        "The buck stops with me",
        "I focus on solution, not the problem",
      ],
    },
    {
      icon: <TrendingUp className="text-green-500" size={40} />,
      title: "Continuous Improvement",
      points: [
        "I invest in learning new skills",
        "I frequently think of ways to improve efficiency",
      ],
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
            About Us
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            We are a Digital Technology Company
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                We started with a group of passionate technologists in 2008, and
                now have grown into a family of 2500+ professionals, spread
                across our six locations - Singapore, New Delhi, Dehradun,
                Dubai, New Jersey, and Sydney catering to over 300 customers
                worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Founding Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                    alt="Office"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p>
                In 2008, when the entire world was facing one of the biggest
                economic challenges, we came into being. Our birth in the
                toughest of times helped us in two ways - first, we had to be
                very cutting-edge with a clear differentiating factor, and
                second, we had to have very strong values and culture to attract
                and retain top-notch talent.
              </p>

              <p>
                We started working with internet product companies and ISVs who
                engaged us for our engineering strength, agility, and
                nimbleness. Within a span of a few years, we got a chance to
                work with many product companies globally. This gave us
                excellent experience of the digital ecosystem and how great
                products are designed and developed for global audiences.
              </p>

              <p>
                We have been growing at a CAGR of more than 50% in the last 5
                years and we attribute it to our people. We have been achieving
                the Great Place to Work™ recognition every year, with 2023
                marking our 8th win in a row.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Journey So Far
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2008",
                  title: "Foundation",
                  description:
                    "Started with a small team of passionate technologists",
                },
                {
                  year: "2012",
                  title: "First 100",
                  description:
                    "Reached 100 employees and expanded service offerings",
                },
                {
                  year: "2015",
                  title: "Global Expansion",
                  description:
                    "Opened international offices in Singapore and Dubai",
                },
                {
                  year: "2018",
                  title: "Great Place to Work",
                  description: "First Great Place to Work certification",
                },
                {
                  year: "2020",
                  title: "1000+ Team",
                  description: "Crossed 1000 employees milestone",
                },
                {
                  year: "2023",
                  title: "2500+ Strong",
                  description:
                    "Now serving 300+ clients with 2500+ professionals",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < 5 && (
                      <div className="w-1 h-full bg-linear-to-b from-cyan-500 to-pink-500 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            We are quite vocal and fanatical about our values
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 border-0 bg-linear-to-br from-gray-50 to-white"
              >
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <ul className="space-y-2">
                    {value.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
