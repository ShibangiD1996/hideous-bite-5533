import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={3}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("pink.200", "pink.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterPage() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      paddingRight="20%"
    >
      <Container as={Stack} maxW={"2xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          templateColumns="repeat(11, 1fr)"
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Lips</ListHeader>
            <Link href={"#"}>Lipstick</Link>
            <Link href={"#"}>Crayon</Link>
            <Link href={"#"}>Lipstick</Link>
            <Link href={"#"}>Matte Lipstick</Link>
            <Link href={"#"}>Hi-Shine</Link>
            <Link href={"#"}>Liquid Lipstick</Link>
            <Link href={"#"}>Lip Gloss</Link>
            <Link href={"#"}>Hi-Shine</Link>
            <Link href={"#"}>Lipgloss</Link>
            <Link href={"#"}>Lip Liner</Link>
            <Link href={"#"}>Lip Balm</Link>
            <Link href={"#"}>Glitter</Link>
            <Link href={"#"}>Lip Stain</Link>
            <Link href={"#"}>Lipstick Set</Link>
            <Link href={"#"}>Lip Kit</Link>
            <Link href={"#"}>Find Your</Link>
            <Link href={"#"}>Lipstick</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Face</ListHeader>
            <Link href={"#"}>Face Sets</Link>
            <Link href={"#"}>Fixing Powder</Link>
            <Link href={"#"}>Primer</Link>
            <Link href={"#"}>Concealer</Link>
            <Link href={"#"}>Foundation</Link>
            <Link href={"#"}>Compact</Link>
            <Link href={"#"}>Banana Powder</Link>
            <Link href={"#"}>Highlighter</Link>
            <Link href={"#"}>Blush</Link>
            <Link href={"#"}>Bronzer</Link>
            <Link href={"#"}>Sindoor</Link>
            <Link href={"#"}>Cheek Stain</Link>
            <Link href={"#"}>Setting Powder</Link>
            <Link href={"#"}>Makeup</Link>
            <Link href={"#"}>Accessories</Link>
            <Link href={"#"}>Makeup Brushes</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Eyes</ListHeader>
            <Link href={"#"}>Eye Shadow</Link>
            <Link href={"#"}>Eyeliner</Link>
            <Link href={"#"}>Eyebrows</Link>
            <Link href={"#"}>Glitter</Link>
            <Link href={"#"}>Mascara</Link>
            <Link href={"#"}>Kajal</Link>
            <Link href={"#"}>Eyeshadow</Link>
            <Link href={"#"}>Brushes</Link>
            <Link href={"#"}>Eye Combos</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Nail Polish</ListHeader>
            <Link href={"#"}>Matte Nail</Link>
            <Link href={"#"}>Polish</Link>
            <Link href={"#"}>Nail Lacquer</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>SKINCARE</ListHeader>
            <Link href={"#"}>Moisturiser</Link>
            <Link href={"#"}>Night Cream</Link>
            <Link href={"#"}>Eye Cream</Link>
            <Link href={"#"}>Body lotion</Link>
            <Link href={"#"}>Serum</Link>
            <Link href={"#"}>Sunscreen</Link>
            <Link href={"#"}>Skincare Kits</Link>
            <Link href={"#"}>Cleansing</Link>
            <Link href={"#"}>Products</Link>
            <Link href={"#"}>Exfoliator &</Link>
            <Link href={"#"}>Scrub</Link>
            <Link href={"#"}>Face Wash</Link>
            <Link href={"#"}>Cleanser</Link>
            <Link href={"#"}>Mask</Link>
            <Link href={"#"}>Face Pack</Link>
            <Link href={"#"}>Sheet Mask</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>BATH & BODY</ListHeader>
            <Link href={"#"}>Shower Gels</Link>
            <Link href={"#"}>Soaps</Link>
            <Link href={"#"}>Body Lotion</Link>
            <Link href={"#"}>Body Spray &</Link>
            <Link href={"#"}>Mists</Link>
            <Link href={"#"}>Hand Wash</Link>
            <Link href={"#"}>Foot Cream</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>SANITIZING CARE</ListHeader>
            <Link href={"#"}>Sanitizing</Link>
            <Link href={"#"}>Wipes</Link>
            <Link href={"#"}>Sanitizing Kits</Link>
            <Link href={"#"}>Sanitizing</Link>
            <Link href={"#"}>Spray</Link>
            <Link href={"#"}>Hand Sanitizer</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>KITS AND COMBOS</ListHeader>
            <Link href={"#"}>Makeup Kits</Link>
            <Link href={"#"}>Bridal Makeup Kits</Link>
            <Link href={"#"}>Makeup Combo</Link>
            <Link href={"#"}>Makeup Gift Sets</Link>
            <Link href={"#"}>Cosmetics Kits &</Link>
            <Link href={"#"}>Combos</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>HAIR CARE</ListHeader>
            <Link href={"#"}>Shampoo</Link>
            <Link href={"#"}>Conditioner</Link>
            <Link href={"#"}>Hair Oil</Link>
            <Link href={"#"}>Serum</Link>
            <Link href={"#"}>Hair Mask</Link>
            <Link href={"#"}>Combos</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>DQUEEN STUDIO</ListHeader>
            <Link href={"#"}>Style</Link>
            <Link href={"#"}>Lifestyle</Link>
            <Link href={"#"}>Trends</Link>
            <Link href={"#"}>Tips</Link>
            <Link href={"#"}>Beauty</Link>
            <Link href={"#"}>Tutorials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>KNOW MORE</ListHeader>
            <Link href={"#"}>Exclusive Offers</Link>
            <Link href={"#"}>Refer & Earn</Link>
            <Link href={"#"}>dqueenPARTIES</Link>
            <Link href={"#"}>Store Locator</Link>
            <Link href={"#"}>Press & Media</Link>
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Shipping and Delivery</Link>
            <Link href={"#"}>policy</Link>
            <Link href={"#"}>Returns and</Link>
            <Link href={"#"}>Replacements</Link>
            <Link href={"#"}>Loyalty Program Policy</Link>
            <Link href={"#"}>Sitemap</Link>
            <Link href={"#"}>Responsible Disclosure</Link>
            <Link href={"#"}>Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        width="100%"
      >
        <Container as={Stack}>
          <Text>© DQUEEN. All rights reserved</Text>
          <Stack direction={"row"} spacing={2}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
