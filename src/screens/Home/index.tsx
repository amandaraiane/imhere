import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles"

export function Home(){
  const participants = ['Amanda', 'Raiane', 'Maria Luiza', 'Vitória', 'Esmeralda', 'Anna', 'Eduardo', 'Catarina', 'Natalia', 'Larissa']

  function handleParticipantAdd(){
    if(participants.includes("Amanda")){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome na lista");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) =>(
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao envento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}
