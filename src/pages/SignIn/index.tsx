import { KeyboardAvoidingView, Pressable, ScrollView, Text } from "native-base";
import { Platform } from "react-native";

import Logo from '../../assets/logo.svg';
import Button from "../../components/Button";
import Input from "../../components/Input";

function SignIn() {
  return (
    <ScrollView
      backgroundColor="primary.500"
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center'
      }}
      paddingX={8}
    >
      <KeyboardAvoidingView
        flex={1}
        width="100%"
        alignItems="center"
        justifyContent="center"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

        <Logo width="88px" />

        <Text
          fontFamily="heading"
          fontSize="xl"
          fontWeight="semibold"
          color="gray.300"
          marginTop={8}
        >
          Signin to your account
        </Text>

        <Input
          autoCorrect={false}
          icon="mail"
          placeholder="Email"
          autoCapitalize="none"
          marginTop={8}
        />

        <Input
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          marginTop={3}
        />

        <Button
          marginTop={8}
          onPress={() => { }}
        >
          Sign In
        </Button>

        <Pressable
          onPress={() => { }}
          width="100%"
          marginTop={4}
          alignItems="center"
        >
          <Text
            color="gray.100"
            fontWeight="semibold"
            fontSize="md"
            fontFamily="heading"
          >
            Create an account
          </Text>
        </Pressable>

        <Pressable
          onPress={() => { }}
          position="absolute"
          bottom={6}
        >
          <Text
            color="gray.300"
            fontWeight="medium"
            fontSize="md"
            fontFamily="heading"
          >
            Back to Home
          </Text>
        </Pressable>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SignIn;