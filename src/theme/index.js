import { extendTheme } from "@chakra-ui/react";
import fonts from "./typography/index";
// import { ButtonStyles as Button } from "./components/Button";
import styles from "./styles";

const theme = extendTheme({
	colors: {
		primary: {
			50: "#e2f8ff",
			100: "#c2e4ef",
			200: "#9ed1e1",
			300: "#79bed4",
			400: "#56abc6",
			500: "#3e92ad",
			600: "#2f7287",
			700: "#1e5161",
			800: "#0c313c",
			900: "#001218",
		},
		secondary: {
			50: "#ffe4e1",
			100: "#ffb5b2",
			200: "#ff8680",
			300: "#fe564e",
			400: "#fe291c",
			500: "#e51303",
			600: "#b20c01",
			700: "#800600",
			800: "#4e0200",
			900: "#1f0000",
		},
		error: "#ff0000",
		caption: "#1a202c",
		divider: "#CDCDCD",
		black: "#000000",
		background: "#1A202C",
		sonic_silver: "#767A7B",
		highlight: "#00C9A7",
		warning: "#FFC75F",
	},
	fonts,
	space: {
		px: "1px",
		0: "0",
		0.5: "0.125rem",
		1: "0.25rem",
		1.5: "0.375rem",
		2: "0.5rem",
		2.5: "0.625rem",
		3: "0.75rem",
		3.5: "0.875rem",
		4: "1rem",
		5: "1.25rem",
		6: "1.5rem",
		7: "1.75rem",
		8: "2rem",
		9: "2.25rem",
		10: "2.5rem",
		12: "3rem",
		14: "3.5rem",
		16: "4rem",
		20: "5rem",
		24: "6rem",
		28: "7rem",
		32: "8rem",
		36: "9rem",
		40: "10rem",
		44: "11rem",
		48: "12rem",
		52: "13rem",
		56: "14rem",
		60: "15rem",
		64: "16rem",
		72: "18rem",
		80: "20rem",
		96: "24rem",
	},
	components: {
		Button: {
			baseStyle: {},
			sizes: {
				xl: {
					h: "56px",
					fontSize: "lg",
					px: "32px",
				},
			},
			variants: {
				// Notice the far simpler structure
				primary: {
					bg: "primary",
					color: "white",
					_hover: {
						bg: "secondary",
						boxShadow: "md",
					},
				},
			},
		},
	},
});

export default theme;
