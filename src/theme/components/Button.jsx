import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
	// style object for base or default style
	baseStyle: {
		_hover: {
			// Notice the use of `mode` function to change color
			// based on theme color mode
			bg: mode(whiten("primary", 20), darken("primary", 20)),
			boxShadow: "md",
		},
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {
		xl: {
			h: "56px",
			fontSize: "lg",
			px: "32px",
		},
	},
	// styles for different visual variants ("outline", "solid")
	variants: {
		"with-shadow": {
			bg: "red.400",
			boxShadow: "0 0 2px 2px #efdfde",
		},
		// 4. We can override existing variants
		solid: (props) => ({
			bg: props.colorMode === "dark" ? "red.300" : "red.500",
		}),
	},
	// default values for `size` and `variant`
	// defaultProps: {},
};
