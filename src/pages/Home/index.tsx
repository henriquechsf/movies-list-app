import { Box, Button, ScrollView, Text } from "native-base";
import { useState } from "react";
import { Dimensions } from "react-native";
import Input from "../../components/Input";

const subtitleMaxWidth = Dimensions.get('window').width / 2;

function Home() {

  const [searchTerm, setSearchTerm] = useState('');

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

      <Input
        placeholder="Search by movie"
        icon="search"
        marginTop={8}
        maxLength={25}
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCorrect={false}
      />
    </ScrollView>
  )
}

export default Home;