import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Icon, IInputProps, Input as DefaultInput } from 'native-base';
import { useCallback, useState } from 'react';
import { Pressable } from 'react-native';

type Props = {
  icon?: string;
} & Partial<IInputProps>

const colors = new Map();
colors.set(true, 'secondary.500');
colors.set(false, 'gray.300');

function Input({ icon, value, onChangeText, ...rest }: Props) {

  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const reset = () => onChangeText('');

  const InputLeftElement = useCallback(() => (
    <Icon as={<Feather />} name={icon} color={colors.get(!!value || isFocus)} size="md" ml={4} />
  ), [icon, value, isFocus]);

  const InputRightElement = useCallback(() => (
    <Pressable onPress={reset}>
      <Icon as={<MaterialIcons />} name="close" color="gray.400" size="md" mr={4} />
    </Pressable>
  ), [reset]);

  return (
    <DefaultInput
      width="100%"
      height={12}
      flexDirection="row"
      alignItems="center"
      borderRadius="md"
      backgroundColor="primary.400"
      placeholderTextColor="gray.300"
      color="gray.200"
      fontSize="lg"
      paddingLeft={4}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      InputLeftElement={<InputLeftElement />}
      InputRightElement={<InputRightElement />}
      {...rest}
    />
  )
}

export default Input;