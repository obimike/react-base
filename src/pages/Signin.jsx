import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Container,
	Box,
	Button,
	Text,
	VStack,
	Input,
	Flex,
	Checkbox,
	Heading,
	InputGroup,
	InputRightElement,
	Image,
	Center,
	Link,
} from "@chakra-ui/react";

import * as Yup from "yup";
import { useFormik } from "formik";
import GoogleIcon from "../assets/images/search.png";

const validationSchema = Yup.object({
	email: Yup.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: Yup.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

function Signin() {
	const [showPassword, setShowPassword] = useState(false);
	const [loginError, setLoginError] = useState([""]);

	const handleShowPassword = () => setShowPassword(!showPassword);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			remember_me: false,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Flex height="100vh">
			<Container p="8" maxW="lg" mt="8">
				<VStack>
					<Heading as="h3" size="xl" mb="8">
						D-Interns
					</Heading>
					<Button
						leftIcon={<Image src={GoogleIcon} w="4" alt="" />}
						colorScheme="teal"
						variant="outline"
					>
						Sign in with Google
					</Button>
					<Text fontSize="md" my="2">
						or
					</Text>
				</VStack>

				<form onSubmit={formik.handleSubmit}>
					<Box mb="4">
						<Text fontSize="lg">Email</Text>
						<Input
							type="email"
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email ? (
							<Text fontSize="sm" style={{ color: "red" }}>
								{formik.errors.email}
							</Text>
						) : null}
					</Box>

					<Box mb="4">
						<Text fontSize="lg">Password</Text>
						<InputGroup size="md">
                            <Input
								pr="4.5rem"
								type={showPassword ? "text" : "password"}
								placeholder="Enter password"
								name="password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								autoComplete="true"
							/>
							<InputRightElement width="4.5rem">
								<Button h="1.75rem" size="sm" onClick={handleShowPassword}>
									{showPassword ? "Hide" : "Show"}
								</Button>
							</InputRightElement>
						</InputGroup>
						{formik.touched.password && formik.errors.password ? (
							<Text fontSize="sm" style={{ color: "red" }}>
								{formik.errors.password}
							</Text>
						) : null}
					</Box>
					<Flex my="2" justifyContent="space-between">
						<Checkbox
							name="remember_me"
							onChange={formik.handleChange}
							fontSize="sm"
						>
							remember me
						</Checkbox>
						<Text fontSize="sm" color="teal">
							Forget password?
						</Text>
					</Flex>
					<Button type="submit" colorScheme="teal" w="100%" mt="2.5">
						Sign in
					</Button>
				</form>

				<Center mt="8">
					<Text fontSize="sm" mr="1.5">
						Don't have an account?{" "}
					</Text>
					<Link as={RouterLink} to="/signup" fontSize="sm" color="teal">
						Sign up
					</Link>
				</Center>
			</Container>
		</Flex>
	);
}

export default Signin;
