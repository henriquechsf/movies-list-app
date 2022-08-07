import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Pressable, ScrollView, Text } from "native-base";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { Platform } from "react-native";

import Logo from '../../assets/logo.svg';
import Button from "../../components/Button";
import Input from "../../components/Input";

type FormData = {
  name: string;
  email: string;
  avatar_url: string;
  password: string;
}

function SignUp() {

  const { control, handleSubmit } = useForm<FormData>();

  const navigation = useNavigation();

  const handleNavigateToSignIn = useCallback(() => {
    navigation.navigate('SignIn');
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
          Create your account
        </Text>

        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
              icon="user"
              placeholder="Name"
              autoCapitalize="none"
              marginTop={8}
            />
          )}
        />

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
              marginTop={3}
            />
          )}
        />

        <Controller
          name="avatar_url"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
              icon="link"
              placeholder="Your avatar URL "
              autoCapitalize="none"
              marginTop={3}
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
          Create my account
        </Button>

        <Pressable
          onPress={handleNavigateToSignIn}
          position="absolute"
          bottom={6}
        >
          <Text
            color="gray.300"
            fontWeight="medium"
            fontSize="md"
            fontFamily="heading"
          >
            Have an account? Log in
          </Text>
        </Pressable>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SignUp;