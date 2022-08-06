import { Box, Button, ScrollView, Text } from "native-base";
import { Dimensions } from "react-native";

const subtitleMaxWidth = Dimensions.get('window').width / 2;

function Home() {
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
          width="100%"
          maxWidth="88px"
          backgroundColor="secondary.500"
          marginTop={8}
          onPress={() => { }}
        >
          <Text
            color="gray.900"
            fontWeight="semibold"
            fontSize="md"
            fontFamily="heading"
          >
            Login
          </Text>
        </Button>
      </Box>
    </ScrollView>
  )
}

export default Home;