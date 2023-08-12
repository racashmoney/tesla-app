import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { FontAwesome, MaterialCommunityIcons, FontAwesome5, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import car from '../assests/images/car.png';
import menuOptions from "../assests/menuOptions";
import MenuOption from "../components/MenuOption";

const Controls = () => {
  return (
  <View style={styles.controls}>
    <Entypo name='lock' size={26} color="gray" />
    <MaterialCommunityIcons name="fan" size={26} color="gray" />
    <FontAwesome5 name="bolt" size={26} color="gray" />
    <Ionicons name="car-sport-sharp" size={26} color="gray" />
  </View>
  )
};

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <Text style={styles.title}>My model S</Text>
        <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>
      <Image source={car} style={styles.image} resizeMode="contain"/> 
      <Controls />
      <FlatList data={menuOptions} showsVerticalScrollIndicator={false} renderItem={MenuOption} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818'
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    color: '#eee',
    fontWeight: "bold",
    marginBottom: 8
  },
  subtitle: {
    fontWeight: '500',
    color: "gray",
  },
  image: {
    width: '100%',
    height: 200,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  }
});
