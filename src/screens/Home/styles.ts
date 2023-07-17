import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},

	eventName: {
		color: "#FDFCFE",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},
	eventDate: {
		color: "#6B6B6B",
		fontSize: 16,
	},
	input: {
		backgroundColor: "#1F1E25",
		padding: 12,
		borderRadius: 5,
		height: 56,
		flex: 1,
		marginRight: 12,

		color: "#FDFCFE",
		fontSize: 16,
	},

	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31CF67",
		alignItems: "center",
		justifyContent: "center",
	},

	buttonText: {
		color: "#FFF",
		fontSize: 20,
	},

	form: {
		width: "100%",
		flexDirection: "row",
		marginTop: 36,
		marginBottom: 42,
	},
	listEmptyText: {
		color: "#FFF",
		fontSize: 14,
		textAlign: "center",
	},
});
