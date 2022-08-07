import Carousel, { CarouselProps } from 'react-native-snap-carousel';
import { Box, IBoxProps, Text } from "native-base";
import { Dimensions } from 'react-native';
import MovieListItem from '../MovieListItem';

const screenWidth = Dimensions.get('window').width;
const ITEM_WIDTH = 280;
const MARGIN_BETWEEN_ITEMS = 16;

type Props = {
  data: any,
  containerStyle?: IBoxProps
} & Partial<CarouselProps>

function MovieList({ data, containerStyle, ...rest }: Props) {

  const ListEmptyComponent = () => (
    <Text color="gray.100" fontSize="md" fontFamily="heading">
      The list is empty
    </Text>
  );

  return (
    <Box {...containerStyle}>
      <Carousel
        sliderWidth={screenWidth}
        itemWidth={ITEM_WIDTH + MARGIN_BETWEEN_ITEMS}
        data={data}
        renderItem={({ item }) => <MovieListItem movie={item} />}
        activeSlideAlignment="start"
        ListEmptyComponent={ListEmptyComponent}
      />
    </Box>
  )
}

export default MovieList;