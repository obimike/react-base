import { VStack } from "@chakra-ui/react";

import Header from "./Header";
import Intro from "./Intro";
import Features from "./Features";
import Test from "./Test";
import Examples from "./Examples";

function Visuals() {
	return (
		<Header>
			<VStack>
				<Intro />
				<Features />
				<Examples />
				<Test />
				<Examples />
				<Test />
				<Examples />
				<Test />
				<Examples />
				<Test />
			</VStack>
		</Header>
	);
}

export default Visuals;
