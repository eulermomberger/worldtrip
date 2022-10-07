import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Continent {
  uid: number;
  slideImage: string;
  name: string;
  legend: string;
};

interface ContinentsCarouselProps {
  continents: Continent[] | []
};

export function ContinentsCarousel({ continents }: ContinentsCarouselProps) {
  const router = useRouter();

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {continents.map((continent: Continent) => (
        <SwiperSlide
          key={continent.uid}
          onClick={() => router.replace(`/continents/${continent.name}`)}
        >
          <Image
            src={continent.slideImage}
            position='absolute'
            zIndex='hide'
            w='100%'
            h='100%'
          />
          <Text
            fontWeight='700'
            fontSize={['24px', '36px', '48px']}
            lineHeight='72px'
            color='white.500'
          >
            {continent.name}
          </Text>
          <Text
            fontWeight='700'
            fontSize={['14px', '16px', '24px']}
            lineHeight='36px'
            color='white.100'
          >
            {continent.legend}
          </Text>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
