import { VStack } from "@chakra-ui/react";

import Header from "./Header";
// import Intro from "./Intro";
// import Features from "./Features";
import Examples from "./Examples";

function Visuals() {
	return (
		<Header>
			<VStack>
				{/* <Intro /> */}
				{/* <Features />s */}
				<Examples />
			</VStack>
		</Header>
	);
}

export default Visuals;
