import { Text, VStack, Wrap, Button } from "@chakra-ui/react";

import React from "react";

function Examples() {
	return (
		<VStack mx={2}>
			<VStack>
				<Text fontSize="xl" fontWeight="bold" color="primary.500">
					Buttons State
				</Text>
				<Wrap spacing={4}>
					<Button bg="primary.700">Primary</Button>
					<Button bg="secondary.200">Secondary</Button>
					<Button bg="primary" disabled>
						Disabled
					</Button>
					<Button bg="primary" variant="outline">
						Outline
					</Button>
				</Wrap>
			</VStack>
		</VStack>
	);
}

export default Examples;
