import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Flex, Icon, Pressable, Text } from "native-base";
import { useCallback } from "react";

type Props = {
  title: string;
  showBackButton?: boolean;
}

function ScreenHeader({ title, showBackButton = true }: Props) {

  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="64px"
      position="relative"
      marginY={2}
    >
      {showBackButton && (
        <Pressable
          position="absolute"
          left={-8}
          onPress={handleGoBack}
        >
          <Icon as={MaterialIcons}
            name="chevron-left"
            color="gray.100"
            size={35}
          />
        </Pressable>
      )}

      <Text
        fontSize="lg"
        color="gray.100"
        fontFamily="heading"
        ellipsizeMode="tail"
        numberOfLines={1}
        maxWidth="192px"
      >
        {title}
      </Text>
    </Flex>
  )
}

export default ScreenHeader;