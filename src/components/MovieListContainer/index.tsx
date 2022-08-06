import { ITextProps, Text } from "native-base";
import MovieList from "../MovieList";

type Props = {
  title: string;
  data: any[]; // TODO: Create movie type
  titleProps?: ITextProps;
}

function MovieListContainer({ title, data, titleProps }: Props) {
  return (
    <>
      <Text
        fontFamily="heading"
        fontWeight="semibold"
        fontSize="lg"
        marginTop={8}
        {...titleProps}
      >
        {title}
      </Text>

      <MovieList
        data={data}
        containerStyle={{ marginTop: 4 }}
      />
    </>
  )
}

export default MovieListContainer;