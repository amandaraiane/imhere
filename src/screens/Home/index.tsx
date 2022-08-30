import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles"

export function Home(){
  const participants = ['Amanda', 'Raiane', 'Maria Luiza', 'Vitória', 'Esmeralda', 'Anna', 'Eduardo', 'Catarina', 'Natalia', 'Larissa']

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove("Amanda")}/>
          ))
        }
      </ScrollView>
    </View>
  )
}
