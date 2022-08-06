import { Box, Divider, Flex, Image, ScrollView, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieListContainer from "../../components/MovieListContainer";
import Header from "../../components/ScreenHeader";

const movie = {
  poster_path: 'https://phobic-heat.surge.sh/images/no_image.jpg',
  title: 'Minions',
  genres: [
    {
      id: 1,
      name: 'Family'
    }
  ],
  overview: 'Lorem ipsum dolor'
}

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

function Details() {
  return (
    <ScrollView
      flex={1}
      paddingX={4}
      contentContainerStyle={{ paddingBottom: 16 }}
      backgroundColor="primary.500"
    >

      <Header title={movie?.title} />

      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={8}>

        <Box>
          <Image
            src={movie.poster_path}
            alt={movie.title}
            width="192px"
            height="266px"
            resizeMode="cover"
            borderRadius="lg" />
        </Box>

        <Flex
          flexDirection="column"
          flex={1} marginLeft={6}>

          <Box
            backgroundColor="primary.400"
            width="100%"
            padding={2}
            borderRadius="lg">
            <Text marginTop={2} color="gray.400" fontFamily="heading" fontWeight="medium">Genre</Text>
            {movie?.genres.map(genre => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </Box>

          <Box
            backgroundColor="primary.400"
            width="100%"
            marginTop={2}
            padding={2}
            borderRadius="lg">
            <Text marginTop={2} color="gray.400" fontFamily="heading" fontWeight="medium">
              Duration
            </Text>
            <Text>2:55</Text>
          </Box>

          <Box
            backgroundColor="secondary.500"
            width="100%"
            marginTop={2}
            padding={2}
            borderRadius="lg">
            <Text marginTop={2} color="gray.700" fontFamily="heading" fontWeight="medium">
              Rating
            </Text>
            <Text color="gray.700" fontWeight="bold" fontSize="lg">
              7/10
            </Text>
          </Box>
        </Flex>

      </Flex>

      <Text fontFamily="heading" fontSize="2xl" fontWeight="semibold">
        {movie?.title}
      </Text>

      <Divider marginY={4} />

      <Text
        fontFamily="heading"
        fontWeight="semibold"
        fontSize="xl">
        Synopsis
      </Text>
      <Text marginTop={2} fontSize="md">{movie?.overview}</Text>

      <MovieListContainer
        title="Similar"
        data={MovieMock}
        titleProps={{ fontSize: "xl" }} />

    </ScrollView>
  )
}

export default Details;