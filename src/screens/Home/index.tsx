import {
	Alert,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

export function Home() {
	const participants = [
		"Luciene",
		"Fagner",
		"Ivanilda",
		"Lairton",
		"Gilvan",
		"Avani",
		"Fernanda",
		"Beatriz",
		"Ingrid",
		"Kallyne",
	];

	function handleParticipantAdd() {
		if (participants.includes("João")) {
			return Alert.alert(
				"Participante existe",
				"Participante já existente com este nome"
			);
		}
	}

	function handleParticipantRemove(name: string) {
		Alert.alert("Remover", `Quer remover o participante ${name}?`, [
			{
				text: "Sim",
				onPress: () => Alert.alert("Deletado"),
			},
			{
				text: "Não",
				style: "cancel",
			},
		]);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Segunda, 17 de julho de 2023.</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6B6B6B"
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Participant
						key={item}
						name={item}
						onRemove={() => handleParticipantRemove(item)}
					/>
				)}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>
						Ninguém chegou ainda? Adicione participantes a sua lista.
					</Text>
				)}
			></FlatList>
		</View>
	);
}
