import { SimpleGrid } from "@chakra-ui/react";

import FeatureCard, { type cardData } from "./FeatureCard";

const feature: cardData[] = [
  {
    title: "گزارش های جامع",
    description:
      " با گزارش‌های جامع ما، به دیدگاه‌های عمیق‌تری دست یابید و تصمیمات بهتری بگیرید.",
    number: "3",
  },
  {
    title: "گزارش های جامع",
    description:
      " با گزارش‌های جامع ما، به دیدگاه‌های عمیق‌تری دست یابید و تصمیمات بهتری بگیرید.",
    number: "2",
  },
  {
    title: "گزارش های جامع",
    description:
      " با گزارش‌های جامع ما، به دیدگاه‌های عمیق‌تری دست یابید و تصمیمات بهتری بگیرید.",
    number:"1",
  },
];

function Features() {
  return (
    <SimpleGrid 
      columns={{ base: 1, sm: 1, md: 2, lg: 3 }} 
      gap={{ base: 1.5, sm: 2, md: 4, lg: 5 }}
      width="100%"
    >
      {feature.map((item, index) => (
        <FeatureCard
          key={`${item.title}-${index}`}
          title={item.title}
          description={item.description}
          number={item.number}
        />
      ))}
    </SimpleGrid>
  );
}

export default Features;
