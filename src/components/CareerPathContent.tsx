import { useState } from "react";
import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";

function CareerPathContent() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "گام اول",
      description:
        "در فضایی امن و صمیمی، ما به شما کمک می‌کنیم تا گنجینه‌های پنهان وجودتان را کشف کنید و به آرزوهایتان رنگ واقعیت ببخشید.",
    },
    {
      id: 2,
      label: "گام دوم",
      description:
        "با بهره‌گیری از اساتید مجرب و متدهای روز دنیا، مهارت‌های تخصصی شما را پرورش می‌دهیم تا در مسیر شغلی خود بدرخشید.",
    },
    {
      id: 3,
      label: "گام سوم",
      description:
        "با ارائه مشاوره و پشتیبانی مستمر، شما را در رسیدن به اهداف شغلی و حرفه‌ای‌تان همراهی می‌کنیم تا به موفقیت پایدار برسید.",
    },
  ];

  return (
    <VStack
      align={{ base: "center", lg: "flex-start" }}
      gap={{ base: "32px", md: "40px", lg: "30px" }}
      w={{ base: "100%", md: "80%", lg: "589px", xl: "650px" }}
      dir="rtl"
    >
      <VStack align={{ base: "center", lg: "flex-start" }} gap={{ base: "24px", md: "32px", lg: "20px" }} w="100%">
        <Text
          color="white"
          fontSize={{ base: "24px", sm: "26px", md: "28px", lg: "32px", xl: "40px" }}
          fontFamily={fonts.heading}
          fontWeight="800"
          lineHeight={{ base: "30px", lg: "40px" }}
          textAlign={{ base: "center", lg: "right" }}
        >
          مسیر های شغلی
        </Text>

        <VStack align={{ base: "center", lg: "flex-start" }} gap={{ base: "20px", lg: "32px" }} w="100%">
          <VStack align={{ base: "center", lg: "flex-start" }} gap="5px" w="100%">
            <HStack gap={{ base: "20px", sm: "25px", lg: "32px" }} justify={{ base: "center", lg: "flex-start" }} w="100%">
              {tabs.map((tab) => (
                <Box
                  key={tab.id}
                  pb="12px"
                  borderBottom={activeTab === tab.id ? "1px solid white" : "none"}
                  cursor="pointer"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Text
                    color={activeTab === tab.id ? "white" : "#C3C3C3"}
                    fontSize={{ base: "16px", sm: "17px", lg: "18px", xl: "20px" }}
                    fontFamily={activeTab === tab.id ? fonts.bold : fonts.semiBold}
                    fontWeight={activeTab === tab.id ? "900" : "600"}
                  >
                    {tab.label}
                  </Text>
                </Box>
              ))}
            </HStack>

            <Text
              color="white"
              fontSize={{ base: "16px", sm: "17px", lg: "18px", xl: "20px" }}
              fontFamily={fonts.faNum}
              fontWeight="400"
              lineHeight={{ base: "24px", lg: "28px" }}
              textAlign={{ base: "center", lg: "right" }}
              minH={{ base: "auto", lg: "84px" }} // Prevent layout shift
            >
              {tabs.find((tab) => tab.id === activeTab)?.description}
            </Text>
          </VStack>
        </VStack>
      </VStack>

      <Box
        bg="white"
        borderRadius="10px"
        px="18px"
        py="17px"
        outline={`1px solid ${colors.button.primary}`}
        outlineOffset="-1px"
        cursor="pointer"
        _hover={{ opacity: 0.9 }}
      >
        <Text
          color={colors.button.primary}
          fontSize="15px"
          fontFamily={fonts.heading}
          fontWeight="700"
          lineHeight="15px"
        >
          انتخاب مسیر شغلی
        </Text>
      </Box>
    </VStack>
  );
}

export default CareerPathContent;
