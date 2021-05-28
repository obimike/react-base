import { useState } from "react";
import {
	useColorMode,
	Switch,
	Flex,
	Button,
	Link,
	Image,
	Box,
	Text,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../logo.svg";

const MenuItems = (props) => {
	const { children, isLast, to = "/", ...rest } = props;
	return (
		<Text
			mb={{ base: isLast ? 0 : 8, sm: 0 }}
			mr={{ base: 0, sm: isLast ? 0 : 4 }}
			display="block"
			{...rest}
			p={1.5}
			_hover={{
				bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
				color: "white",
				borderRadius: 4,
			}}
		>
			<Link to={to}>{children}</Link>
		</Text>
	);
};

const Header = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	const [show, setShow] = useState(false);
	const toggleMenu = () => setShow(!show);

	const [display, changeDisplay] = useState("none");
	return (
		<VStack>
			<Flex
				as="nav"
				justify="space-between"
				wrap="wrap"
				w="100%"
				mb={8}
				p={8}
				color="primary.500"
				boxShadow="md"
				alignItems="center"
			>
				<Flex alignItems="center">
					<Image
						src={logo}
						boxSize="35px"
						borderRadius="full"
						alignItems="center"
					/>
					<Text fontSize="2xl" fontWeight="bold" color="primary.500">
						React Base
					</Text>
				</Flex>
				<Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
					{show ? <CloseIcon /> : <HamburgerIcon />}
				</Box>
				<Box
					display={{ base: show ? "block" : "none", md: "block" }}
					flexBasis={{ base: "100%", md: "auto" }}
				>
					<Flex
						align={["center", "center", "center", "center"]}
						justify={["center", "space-between", "flex-end", "flex-end"]}
						direction={["column", "row", "row", "row"]}
						pt={[4, 4, 0, 0]}
					>
						<MenuItems to="/">Home</MenuItems>
						<MenuItems to="/how">Samples </MenuItems>
						<MenuItems to="/faetures">Features </MenuItems>
						<MenuItems to="/pricing">Pricing </MenuItems>

						<Switch
							colorScheme="primary.500"
							isChecked={isDark}
							onChange={toggleColorMode}
						/>
					</Flex>
				</Box>
			</Flex>
			<Flex>{props.children}</Flex>
		</VStack>
	);
};

export default Header;
