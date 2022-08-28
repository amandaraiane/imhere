import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles"

export function Home(){
  function handleParticipantAdd(){
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}!`);
  }
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 27 de agosto de 2022.</Text>

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity> 
      </View>

      <Participant name="Amanda Raiane" onRemove={() => handleParticipantRemove("Amanda")}/>
      <Participant name="Vitória Alves" onRemove={() => handleParticipantRemove("Vitoria")}/>
      <Participant name="Vera Lúcia" onRemove={() => handleParticipantRemove("Vera")}/>
    </View>
  )
}
