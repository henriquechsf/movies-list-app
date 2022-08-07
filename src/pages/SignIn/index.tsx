import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Pressable, ScrollView, Text } from "native-base";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { Platform } from "react-native";

import Logo from '../../assets/logo.svg';
import Button from "../../components/Button";
import Input from "../../components/Input";

type FormData = {
  email: string;
  password: string;
}

function SignIn() {

  const { control, handleSubmit } = useForm<FormData>();

  const navigation = useNavigation();

  const handleNavigateToHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handleNavigateToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const onSubmit = (data: FormData) => console.log(data);

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

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
              icon="mail"
              placeholder="Email"
              autoCapitalize="none"
              marginTop={8}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              marginTop={3}
            />
          )}
        />

        <Button
          marginTop={8}
          onPress={handleSubmit(onSubmit)}
        >
          Sign In
        </Button>

        <Pressable
          onPress={handleNavigateToSignUp}
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
          onPress={handleNavigateToHome}
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