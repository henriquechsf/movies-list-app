import { useNavigation } from "@react-navigation/native";
import { Box, ScrollView, Text } from "native-base";
import { useCallback, useState } from "react";
import { Dimensions } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MovieListContainer from "../../components/MovieListContainer";

const subtitleMaxWidth = Dimensions.get('window').width / 2;

const MovieMock = [
  {
    id: Math.random(),
    title: 'Uncharted'
  },
  {
    id: Math.random(),
    title: 'Uncharted 2'
  },
  {
    id: Math.random(),
    title: 'Ted'
  },
  {
    id: Math.random(),
    title: 'Ted 2'
  },
  {
    id: Math.random(),
    title: 'Em busca do Soldado Ryan'
  }
]

function Home() {

  const [searchTerm, setSearchTerm] = useState('');

  const navigation = useNavigation();

  const handleNavigateToSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <ScrollView
      flex={1}
      backgroundColor="primary.500"
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
      paddingTop={4}
      paddingX={4}
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flexDirection="column">
          <Text
            fontFamily="heading"
            fontSize="2xl"
            fontWeight="bold"
          >
            Hey there
          </Text>
          <Text
            fontSize="md"
            fontWeight="normal"
            numberOfLines={2}
            isTruncated
            maxWidth={subtitleMaxWidth}
            marginTop={2}
            color="gray.300"
          >
            What would you like to watch today?
          </Text>
        </Box>

        <Button
          maxWidth="88px"
          marginTop={8}
          onPress={handleNavigateToSignIn}
        >
          Login
        </Button>
      </Box>

      <Input
        placeholder="Search by movie"
        icon="search"
        marginTop={8}
        maxLength={25}
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCorrect={false}
      />

      <MovieListContainer
        title="Popular"
        data={MovieMock} />

      <MovieListContainer
        title="Top Rated"
        data={MovieMock} />

      <MovieListContainer
        title="Uncoming"
        data={MovieMock} />
    </ScrollView>
  )
}

export default Home;