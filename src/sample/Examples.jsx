import {
	Text,
	VStack,
	Wrap,
	Button,
	Heading,
	Flex,
	HStack,
} from "@chakra-ui/react";

import React from "react";

function Examples() {
	return (
		<VStack px={20}>
			<VStack>
				<VStack mb={4}>
					<Heading size="2xl" fontWeight="medium">
						Typography
					</Heading>
					<div>
						<Heading as="h1">Headers</Heading>
						<Flex alignItems="center">
							<Heading as="h2" size="3xl" mx={2}>
								Title
							</Heading>
							<Heading as="h2" size="2xl" mx={2}>
								Headers 2
							</Heading>
							<Heading as="h3" size="xl" mx={2}>
								Headers 3
							</Heading>
							<Heading as="h4" size="md" mx={2}>
								Subtitle
							</Heading>
						</Flex>
					</div>
					<div>
						<Heading as="h4" size="md">
							Body
						</Heading>
						<Text>
							Invoked when user interaction should change the active item: arrow
							keys move it up/down in the list, selecting an item makes it
							active, and changing the query may reset it to the first item in
							the list if it no longer matches the filter. Invoked when user
							interaction should change the active item: arrow keys move it
							up/down in the list, selecting an item makes it active, and
							changing the query may reset it to the first item in the list if
							it no longer matches the filter.
						</Text>
					</div>
				</VStack>
				<Text
					my={2}
					fontSize={{ base: "3xl", sm: "4xl" }}
					lineHeight="8"
					fontWeight="extrabold"
					letterSpacing="tight"
				>
					Buttons State
				</Text>
				<Wrap spacing={4}>
					<Button variant="primary">Primary</Button>
					<Button variant="outline">Secondary</Button>
					<Button variant="primary" isLoading>
						Disabled
					</Button>

					<Button
						isLoading
						loadingText="Loading"
						variant="outline"
						spinnerPlacement="start"
					>
						Submit
					</Button>
				</Wrap>
			</VStack>
		</VStack>
	);
}

export default Examples;
