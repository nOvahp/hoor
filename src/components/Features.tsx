import { SimpleGrid } from "@chakra-ui/react";

import FeatureCard, { type cardData } from "./FeatureCard";

const feature: cardData[] = [
  {
    title: "گزارش های جامع",
    description:
      " با گزارش‌های جامع ما، به دیدگاه‌های عمیق‌تری دست یابید و تصمیمات بهتری بگیرید.",
    number: "1",
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
    number:"3",
  },
];

function Features() {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} gap={4}  >
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
