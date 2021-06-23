import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export default function App() {
  let books = [
    {title: 'Dune', description: 'Un livre avec beaucoup de sable'},
    {title: 'Mer', description: "Un livre avec beaucoup d'eau"},
    {title: 'Forêt', description:"C'est boisé par ici"},
    {title: 'Montagne', description:"C'est un peu haut là.."},
    {title: 'Marais', description:"Quelque chose m'a touché le pied"},
    {title: 'Savane', description:'Graouh, dit-alors le lion'},
    {title: 'Grotte', description:"Bon t'as compris l'truc"}
  ];
  const [booksFiltered, setBooksFiltered] = useState([...books]);
  const [content, setContent] = useState('');
  const booksFilteredJSX = booksFiltered.map(book => {
    return (
      <View>
      <Text  style={styles.books}>
        <AntDesign style={styles.icon} name="book" size={24} color="white" /> {book.title}
      </Text>
      <Text  style={styles.desc}>
        {book.description}
      </Text>
      </View>
  )})

  const handleSubmit = () => {
    setBooksFiltered(books.filter(book => {
      return book.title.toLowerCase().includes(content.toLowerCase())
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.list}>Ma bibliothèque</Text>
      <View style={styles.form}>
      <TextInput style={styles.searchBar} value={content} onChangeText={(text) => {setContent(text)}} placeholder="Rechercher.." />
      <Button title='Go' onPress={handleSubmit}/>
      </View>
      {booksFilteredJSX}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  searchBar: {
    width: 200,
    borderColor: 'white',
    borderWidth: 2,
    padding: 5,
    backgroundColor: 'white'
  },
  form: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  books: {
    flexDirection: 'row',
    margin: 10,
    width: 250,
    borderBottomWidth: 3,
    borderColor: 'white',
    color: 'white'
  },
  icon: {
    marginRight: 5
  },
  desc: {
    textAlign: 'center',
    color: 'white'
  }
});