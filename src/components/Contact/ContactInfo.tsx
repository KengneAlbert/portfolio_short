import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-red-500" />,
    title: "Email",
    value: "albertkengne2000@gmail.com",
    link: "mailto:albertkengne2000@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6 text-red-500" />,
    title: "Téléphone",
    value: "+237 6 59 07 08 72",
    link: "tel:+23765907872"
  },
  {
    icon: <MapPin className="w-6 h-6 text-red-500" />,
    title: "Localisation",
    value: "Bayangam, Cameroun",
    link: "https://maps.google.com/?q=Bayangam,Cameroun"
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <a
          key={index}
          href={detail.link}
          className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50
                   hover:border-red-500/30 transition-all duration-300 group"
          target={detail.title === "Localisation" ? "_blank" : undefined}
          rel={detail.title === "Localisation" ? "noopener noreferrer" : undefined}
        >
          <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-red-500/10 transition-colors duration-300">
            {detail.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold">{detail.title}</h3>
            <p className="text-gray-400 group-hover:text-red-500 transition-colors duration-300">
              {detail.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}