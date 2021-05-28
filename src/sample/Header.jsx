import { useState } from "react";
import {
	useColorMode,
	Switch,
	Flex,
	Button,
	IconButton,
	Link,
	Image,
	Box,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../logo.svg";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";

	const [display, changeDisplay] = useState("none");
	return (
		<Box>
			<Flex
				position="fixed"
				borderBottom="1px"
				borderBottomColor="divider"
				w="100%"
				justifyContent="space-between"
			>
				<Flex alignItems="center">
					<Image src={logo} boxSize="35px" borderRadius="full" />
					<Text fontSize="2xl" fontWeight="bold" color="primary.500">
						React Base
					</Text>
				</Flex>
				<Flex align="center">
					{/* Desktop */}
					<Flex display={["none", "none", "flex", "flex"]}>
						<Link href="/" passHref>
							<Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
								Home
							</Button>
						</Link>

						<Link href="/about" passHref>
							<Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
								About
							</Button>
						</Link>

						<Link href="/contact" passHref>
							<Button
								as="a"
								variant="ghost"
								aria-label="Contact"
								my={5}
								w="100%"
							>
								Contact
							</Button>
						</Link>
					</Flex>

					{/* Mobile */}
					<Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
					<IconButton
						bg="transparent"
						aria-label="Open Menu"
						size="lg"
						mr={2}
						icon={<HamburgerIcon />}
						onClick={() => changeDisplay("flex")}
						display={["flex", "flex", "none", "none"]}
					/>
				</Flex>

				{/* Mobile Content */}
				<Flex
					w="100vw"
					display={display}
					// bgColor="gray.50"
					zIndex="toast"
					h="100vh"
					pos="fixed"
					top="0"
					left="0"
					overflowY="auto"
					flexDir="column"
				>
					<Flex justify="flex-end">
						<IconButton
							mt={2}
							mr={2}
							aria-label="Open Menu"
							size="lg"
							icon={<CloseIcon />}
							onClick={() => changeDisplay("none")}
						/>
					</Flex>

					<Flex flexDir="column" align="center" color="#000">
						<Link href="/" passHref>
							<Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
								Home
							</Button>
						</Link>

						<Link href="/about" passHref>
							<Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
								About
							</Button>
						</Link>

						<Link href="/contact" passHref>
							<Button
								as="a"
								variant="ghost"
								aria-label="Contact"
								my={5}
								w="100%"
							>
								Contact
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Flex>
			<Box pt={16}>
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
						Outline
					</Button>
				</Flex>
			</Box>
		</Box>
	);
};

export default Header;
