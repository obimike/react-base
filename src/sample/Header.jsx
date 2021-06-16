import React from "react";
import {
	chakra,
	HStack,
	Link,
	Flex,
	IconButton,
	useColorModeValue,
	useDisclosure,
	CloseButton,
	VStack,
	Button,
	useColorMode,
	Image,
	Text,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import {
	MoonIcon,
	SunIcon,
	HamburgerIcon,
	EmailIcon,
	DragHandleIcon,
	SpinnerIcon,
} from "@chakra-ui/icons";
import logo from "./images/roomie.png";

export default function Header(props) {
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
	const bg = useColorModeValue("white", "gray.800");
	const ref = React.useRef();
	const [y, setY] = React.useState(0);
	const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

	const { scrollY } = useViewportScroll();
	React.useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);
	const mobileNav = useDisclosure();

	const MobileNavContent = (
		<VStack
			pos="fixed"
			top={0}
			left={0}
			right={0}
			display={mobileNav.isOpen ? "flex" : "none"}
			flexDirection="column"
			p={2}
			pb={4}
			m={2}
			bg={bg}
			spacing={3}
			rounded="sm"
			shadow="sm"
			zIndex="3"
		>
			<CloseButton
				aria-label="Close menu"
				justifySelf="self-start"
				onClick={mobileNav.onClose}
			/>
			<Button w="full" variant="ghost" leftIcon={<DragHandleIcon />}>
				Dashboard
			</Button>
			<Button w="full" variant="primary" leftIcon={<EmailIcon />}>
				Inbox
			</Button>
			<Button w="full" variant="ghost" leftIcon={<SpinnerIcon />}>
				Videos
			</Button>
		</VStack>
	);
	return (
		<React.Fragment>
			<chakra.header
				ref={ref}
				shadow={y > height ? "sm" : undefined}
				transition="box-shadow 0.2s"
				bg={bg}
				top={0}
				w="full"
				position="fixed"
				zIndex="2"
				overflowY="hidden"
				borderBottomWidth={2}
				borderBottomColor={useColorModeValue("gray.200", "gray.900")}
			>
				<chakra.div h="4.5rem" mx="auto" maxW="1200px">
					<Flex
						w="full"
						h="full"
						px="6"
						alignItems="center"
						justifyContent="space-between"
					>
						<Flex align="flex-start">
							<HStack>
								<Image
									src={logo}
									h="12rem"
									borderRadius="full"
									alignItems="center"
								/>
								{/* <Text fontSize="3xl" fontWeight="medium">
									React Base
								</Text> */}
							</HStack>
						</Flex>
						<Flex justify="flex-end" align="center">
							<HStack spacing="5" display={{ base: "none", md: "flex" }}>
								<Button variant="ghost" size="sm">
									Sign in
								</Button>
								<Button variant="primary" size="sm">
									Sign up
								</Button>
							</HStack>
							<IconButton
								size="md"
								fontSize="lg"
								aria-label={`Switch to ${text} mode`}
								variant="ghost"
								color="current"
								ml={{ base: "0", md: "3" }}
								onClick={toggleMode}
								icon={<SwitchIcon />}
							/>
							<IconButton
								display={{ base: "flex", md: "none" }}
								aria-label="Open menu"
								fontSize="20px"
								color={useColorModeValue("gray.800", "inherit")}
								variant="ghost"
								icon={<HamburgerIcon />}
								onClick={mobileNav.onOpen}
							/>
						</Flex>
						{MobileNavContent}
					</Flex>
				</chakra.div>
			</chakra.header>
			<Flex>{props.children}</Flex>
		</React.Fragment>
	);
}
