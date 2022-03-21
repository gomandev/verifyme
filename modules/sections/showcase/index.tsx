import { LogoShowcase } from "@modules/blocks/showcase";

const images = [
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Dell.svg",
    alt: "dell",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Carlsberg-1.svg",
    alt: "Carlsberg",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Dell.svg",
    alt: "dell",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Carlsberg-1.svg",
    alt: "Carlsberg",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Dell.svg",
    alt: "dell",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Carlsberg-1.svg",
    alt: "Carlsberg",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Dell.svg",
    alt: "dell",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Carlsberg-1.svg",
    alt: "Carlsberg",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Dell.svg",
    alt: "dell",
  },
  {
    src: "https://static.bit.dev/homepage-enterprise-logos/Carlsberg-1.svg",
    alt: "Carlsberg",
  },
];

const Showcase = () => {
  return (
    <div className="mt-10">
      <LogoShowcase images={images} />
    </div>
  );
};

export default Showcase;
