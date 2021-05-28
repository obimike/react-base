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
	VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CloseIcon, LinkIcon } from "@chakra-ui/icons";
import logo from "../logo.svg";
import Header from "./Header";
import Intro from "./Intro";
import Examples from "./Examples";

function visuals() {
	return (
		<Header>
			<VStack>
				<Intro />
				<Examples />
			</VStack>
		</Header>
	);
}

export default visuals;
