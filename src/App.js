import { Button, Center, HStack, Heading } from "@chakra-ui/react";

function App() {
	return (
		<Center m={100}>
			<Heading mr={10}>Buttons</Heading>
			<br />
			<HStack>
				<Button bg="primary.700" color="#fff">
					Button
				</Button>
				<Button bg="secondary" color="#fff">
					Button
				</Button>
			</HStack>
		</Center>
	);
}

export default App;
