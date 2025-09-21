import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  // Contact details
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourportfolio.com",
      href: "mailto:hello@yourportfolio.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  // Social links
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello@yourportfolio.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can 
            bring your ideas to life with modern technology and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

            {/* Contact Info List */}
            {contactInfo.map((item, index) => (
              <div key={index} className="border p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-full border hover:border-blue-600 transition-all duration-300 group ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Call To Action */}
          <div className="space-y-6">
            <div className="border p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-gray-600 mb-6">
                I'm currently available for freelance work and full-time opportunities. 
                Let's create something amazing together!
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 transition">
                Send Me a Message
              </button>
            </div>

            <div className="border p-6 rounded-lg shadow-sm">
              <h4 className="font-medium mb-3">Quick Response</h4>
              <p className="text-sm text-gray-600">
                I typically respond to emails within 24 hours. For urgent inquiries, 
                feel free to call or connect on LinkedIn for faster communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
