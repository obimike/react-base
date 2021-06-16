// import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
	baseStyle: {
		fontWeight: "bold",
		textTransform: "uppercase",
		borderRadius: "8px",
	},
	sizes: {
		sm: {
			fontSize: "sm",
			px: 4, // <-- px is short for paddingLeft and paddingRight
			py: 3, // <-- py is short for paddingTop and paddingBottom
		},
		md: {
			fontSize: "md",
			px: 6, // <-- from the design system
			py: 4, // <-- from the design system
		},
	},

	variants: {
		outline: {
			border: "1px solid",
			borderColor: "primary.700",
			color: "primary.700",
			bg: "transparent",
			_hover: {
				borderColor: "primary.500",
				color: "primary.500",
			},
		},
		primary: {
			bg: "primary.700",
			color: "white",
			_hover: {
				bg: "primary.500",
			},
		},
	},

	// The default size and variant values
	defaultProps: {
		size: "md",
		variant: "primary",
	},
};
