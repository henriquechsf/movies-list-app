import { useNavigation } from "@react-navigation/native";
import { Image, Pressable } from "native-base";
import { useCallback, useMemo } from "react";

type Props = {
  movie: any; // TODO: Create movie type
}

function MovieListItem({ movie }: Props) {

  const navigation = useNavigation();

  const navigateToDetails = useCallback(() => {
    navigation.navigate('Details', { movieId: movie.id });
  }, [movie?.id])

  const sourceImage = useMemo(() => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    }

    return 'https://phobic-heat.surge.sh/images/no_image.jpg';
  }, [movie?.poster_path]);

  return (
    <Pressable
      width="288px"
      height="288px"
      marginRight={8}
      onPress={navigateToDetails}
    >
      <Image
        src={sourceImage}
        alt={movie.title}
        width="100%"
        height="100%"
        borderRadius="lg"
      />
    </Pressable>
  )
}

export default MovieListItem;