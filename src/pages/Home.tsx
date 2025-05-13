import solar from "../assets/images.jpeg";
import industry from "../assets/images (1).jpeg";
import commercial from "../assets/istockphoto-479842074-612x612.jpg";
import athanaz from "../assets/athanazi.jpg";
import logo from "../assets/Electroline_PNG[1].png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Powering Rwanda's Future
            </h1>
            <p className="text-xl mb-8">
              Leading provider of electrical engineering solutions,
              installations and maintenance services across Rwanda and East
              Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-lg transition"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="bg-transparent hover:bg-blue-800 border border-white px-6 py-3 rounded-lg transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Electroline Rwanda Ltd.
              </h2>
              <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img
                  src={logo}
                  alt="Company headquarters in Kigali"
                  className=""
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Story
                </h3>
                <p className="text-gray-600 mb-4">
                  Electroline Rwanda Ltd was founded in 2024 with a vision to
                  revolutionize the electrical, IT and security industries in
                  Rwanda. Based in Rwanda and East Africa as well, we are a
                  dedicated team of professionals specializing in electrical
                  installations, telecommunications, networking, security
                  systems, repairs, Education support and business support
                  services.
                </p>
                <p className="text-gray-600 mb-4">
                  From the beginning, our mission has been to provide
                  innovative, reliable, and high-quality solutions to homes,
                  businesses, and industries across Rwanda. With a strong focus
                  on technology and customer satisfaction, we have grown into a
                  trusted partner for electrical and IT services.
                </p>
                <p className="text-gray-600 mb-4">
                  At Electroline Rwanda Ltd, we believe in excellence,
                  integrity, and continuous innovation. Our experts are
                  committed to delivering cutting-edge solutions, whether it's
                  securing properties with advanced access control systems,
                  setting up telecommunications infrastructure, or ensuring
                  seamless electrical installations.
                </p>
                <p className="text-gray-600 mb-4">
                  Join us on our journey as we continue to power progress,
                  enhance security, and drive digital transformation in Rwanda
                  '' WELCOME TO ELECTROLINE RWANDA LTD'' where technologies
                  meets
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto py-12 px-4">
              <div className="md:w-1/2">
                <img
                  src={athanaz}
                  alt="Technician installing network equipment"
                  className="rounded-lg shadow-xl w-full h-[250px] object-cover object-center"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ownership
                </h3>
                <p className="text-gray-600">
                  ELECTROLINE RWANDA LTD is a privately owned Rwandan company
                  founded by Athanase NiyonsHuti with a vision to contribute to
                  Rwanda's growing infrastructure development. Its ownership
                  structure provides full control over strategic decisions and
                  business operations. Committed to growth and innovation,
                  Electroline Rwanda Ltd strives to deliver high-quality
                  services across Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 w-full max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Electroline Rwanda Ltd, our mission is to deliver reliable,
              high-quality, and innovative solutions that drive progress and
              ensure customer satisfaction
            </p>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Electrical Installations & Maintenance
              </h3>
              <p className="text-gray-600">
                We specialize in the installation, maintenance, and repair of
                residential, commercial, and industrial electrical systems,
                ensuring safety and efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Security Systems & Access Control
              </h3>
              <p className="text-gray-600">
                Our team provides advanced security solutions, including CCTV
                installation, biometric access control, alarm systems, and fire
                detection systems, enhancing safety for homes and businesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Networking & Telecommunications
              </h3>
              <p className="text-gray-600">
                We offer wired and wireless networking solutions, including
                LAN/WAN setup, fiber optic installations, internet connectivity
                solutions, and telecom infrastructure services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                IT Services & Consultancy
              </h3>
              <p className="text-gray-600">
                We provide computer programming, software solutions, IT
                consultancy, and system integration to enhance business
                efficiency and digital transformation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Technical Testing & Repair Services
              </h3>
              <p className="text-gray-600">
                Our team conducts technical inspections, testing, and repair
                services for electrical equipment, IT hardware, consumer
                electronics, and communication devices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Business Support & Educational Services
              </h3>
              <p className="text-gray-600">
                We offer business consultancy, training programs, and
                educational support activities to empower businesses and
                individuals with technical knowledge and digital skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Portfolio Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our notable electrical engineering projects across
              Rwanda.
            </p>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={commercial}
                alt="Commercial building project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Kigali Heights Commercial Complex
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete electrical installation and automation systems for
                  this landmark commercial complex in Kigali.
                </p>
                <span className="text-blue-900 font-medium">
                  Commercial Project
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={solar}
                alt="Solar installation project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Nyagatare Solar Farm
                </h3>
                <p className="text-gray-600 mb-4">
                  Design and installation of a 50kW solar power system for a
                  rural community in Eastern Province.
                </p>
                <span className="text-blue-900 font-medium">
                  Renewable Energy
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={industry}
                alt="Industrial project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Mara Phones Factory
                </h3>
                <p className="text-gray-600 mb-4">
                  Power distribution and control systems for Rwanda's first
                  smartphone manufacturing plant.
                </p>
                <span className="text-blue-900 font-medium">
                  Industrial Project
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                  BH
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Bank of Kigali</h4>
                  <p className="text-gray-500 text-sm">Financial Institution</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Electroline Rwanda's attention to detail and commitment to
                safety standards made them the perfect partner for our
                headquarters' electrical system upgrade."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                  RH
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Radisson Blu Hotel</h4>
                  <p className="text-gray-500 text-sm">Hospitality</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Their team's expertise in automation systems has transformed
                our guest experience. Professional, reliable, and innovative
                solutions."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                  MP
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Ministry of Infrastructure</h4>
                  <p className="text-gray-500 text-sm">Government</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Electroline Rwanda has consistently delivered quality
                electrical engineering services across our public infrastructure
                projects. A reliable partner in Rwanda's development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Get in touch with our team of experts.
            </p>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="tel"
                      placeholder="+250 7XX XXX XXX"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        KK 15 Rd Street, Kigali
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+250 788 428 828</p>
                      <p className="text-gray-600">+250 790 002 088</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">athanasexxiij28@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 8:00 AM - 5:00 PM
                      </p>
                      {/* <p className="text-gray-600">
                        Saturday: 9:00 AM - 1:00 PM
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="http://www.linkedin.com/in/electroline-rwanda-ltd-417a59277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 hover:bg-blue-800 text-white h-10 w-10 rounded-full flex items-center justify-center transition"
                  >
                    {/* TikTok Icon */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M208,72a48,48,0,0,1-48-48V8H128V168a32,32,0,1,1-32-32,31.3,31.3,0,0,1,8,1.1V97.6a80,80,0,1,0,56,76.4V104.9A95.3,95.3,0,0,0,208,112Z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.youtube.com/@ELECTROLINERWANDA23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 hover:bg-blue-800 text-white h-10 w-10 rounded-full flex items-center justify-center transition"
                  >
                    {/* YouTube Icon */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/electroline-rwanda-ltd-417a59277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 hover:bg-blue-800 text-white h-10 w-10 rounded-full flex items-center justify-center transition"
                  >
                    {/* LinkedIn Icon */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 013.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-center p-4">
                Interactive Map Would Be Embedded Here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for the latest news and updates about
              our services.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-white text-gray-800 px-4 py-3 rounded-lg flex-grow focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
