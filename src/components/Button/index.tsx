import { Button as DefaultButton, IButtonProps, Text } from 'native-base';

function Button({ children, ...rest }: IButtonProps) {
  return (
    <DefaultButton
      width="100%"
      backgroundColor="secondary.500"
      {...rest}
    >
      <Text
        color="gray.900"
        fontWeight="semibold"
        fontSize="md"
        fontFamily="heading"
      >
        {children}
      </Text>
    </DefaultButton>
  )
}

export default Button;