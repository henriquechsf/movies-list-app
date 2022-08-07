import { Flex, Image, ScrollView, Text } from "native-base";
import Button from "../../components/Button";
import MovieListContainer from "../../components/MovieListContainer";
import Header from "../../components/ScreenHeader";

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

function Profile() {
  return (
    <ScrollView
      flex={1}
      backgroundColor="primary.500"
      contentContainerStyle={{
        paddingBottom: 32
      }}
      paddingX={8}
    >
      <Header title="Profile" />

      <Flex flexDirection="row" alignItems="center">
        <Image
          src="https://github.com/henriquechsf.png"
          alt="User avatar"
          width="96px"
          height="96px"
          borderRadius="full"
        />

        <Flex flexDirection="column" marginLeft={4}>
          <Text
            fontFamily="heading"
            fontWeight="semibold"
            fontSize="2xl"
          >
            Carlos Henrique
          </Text>
          <Text
            fontFamily="heading"
            fontWeight="medium"
            fontSize="sm"
            color="gray.300"
            marginTop={1}
          >
            carloshenrique4m@gmail.com
          </Text>
        </Flex>
      </Flex>

      <MovieListContainer
        title="Watch List"
        data={MovieMock}
      />

      <Button marginTop={8} onPress={() => { }}>
        Log out
      </Button>

    </ScrollView>
  )
}

export default Profile;