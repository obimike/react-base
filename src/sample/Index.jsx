import {
	Button,
	Center,
	Image,
	HStack,
	Text,
	Heading,
	Box,
	Flex,
	IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CloseIcon, LinkIcon } from "@chakra-ui/icons";
import logo from "../logo.svg";

function visuals() {
	return (
		<Box>
			<Flex
				// pos="fixed"
				// top="1rem"
				// right="1rem"
				align="center"
				border="1px"
				borderBottomColor="divider"
				w="100%"
				p={3}
				justifyContent="space-between"
			>
				<Flex>
					<Image src={logo} boxSize="35px" borderRadius="full" />

					<Text fontSize="2xl" fontWeight="bold" color="primary.700">
						React Base
					</Text>
				</Flex>

				<Flex>
					<Text p={1.5}>Button</Text>
					<MoonIcon />
					<MenuToggle />

					<IconButton
						bg="transparent"
						variant="outline"
						variantColor="teal"
						aria-label="toggle color mode"
						icon={colorMode === "light" ? "moon" : "sun"}
						onClick={toggleColorMode}
						color="teal.600"
					/>
				</Flex>
			</Flex>

			<Box mt={10}>
				<Flex>
					<Button bg="primary.700" m={1}>
						Primary
					</Button>
					<Button m={1} bg="secondary.200">
						Secondary
					</Button>
					<Button m={1} bg="primary" disabled>
						Disabled
					</Button>
					<Button m={1} bg="primary" variant="outline">
						Disabled
					</Button>
				</Flex>
			</Box>
		</Box>
	);
}

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <LinkIcon />}
		</Box>
	);
};

export default visuals;
