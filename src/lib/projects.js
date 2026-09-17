import movieXD from "@/assets/images/moviexd.png";
import dinehubImage from "@/assets/images/dinehub.png";
import cryptoImage from "@/assets/images/crypto.png";

export const projects = [
  {
    id: 1,
    title: "MovieXd",
    category: "Frontend",
    description:
      "A movie streaming platform that allows users to browse and watch movies, view details, and search for their favorite films.",
    image: movieXD,
    technologies: ["React", "Vite", "CSS", "API"],
    link: "https://moviexd.vercel.app/",
  },

  {
    id: 2,
    title: "DineHub",
    category: "Full Stack",
    description:
      "A restaurant platform that combines food ordering, reservations, and payment functionality into one experience.",
    image: dinehubImage,
    technologies: [
      "React",
      "Vite",
      "REST API",
      "Stripe",
      "MongoDB",
      "Express",
      "Node.js",
    ],
    link: "https://dinehub-frontend.vercel.app",
  },

  {
    id: 3,
    title: "Crypto Market Dashboard",
    category: "Frontend",
    description:
      "A cryptocurrency dashboard displaying market data, charts, prices, and coin information using live API data.",
    image: cryptoImage,
    technologies: ["React", "Vite", "CoinGecko API", "Charts"],
    link: "https://cryptoplace-fawn.vercel.app",
  },
];
