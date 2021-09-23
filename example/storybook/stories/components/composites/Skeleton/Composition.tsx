import React, { useState } from 'react';
import {
  Box,
  Skeleton,
  VStack,
  Text,
  Avatar,
  HStack,
  Image,
} from 'native-base';

function CompositionComponent() {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 5000);
  return (
    <VStack>
      <HStack alignItems="center">
        <Skeleton.Circle size={12} isLoaded={loaded}>
          <Avatar
            source={{
              uri: 'https://nativebase.github.io/img/native-base-icon.png',
            }}
          />
        </Skeleton.Circle>
        <VStack w="100%" h="50%">
          <Skeleton.Text
            isLoaded={loaded}
            w="65%"
            ml={2}
            _stack={{ justifyContent: 'center' }}
          >
            <Text fontWeight="bold" fontSize="lg" my="auto" ml={2}>
              Nativebase
            </Text>
          </Skeleton.Text>
          <Skeleton.Text isLoaded={loaded} w="25%" ml={2}>
            <Text fontWeight="bold" fontSize="lg" my="auto" ml={2}>
              Nativebase
            </Text>
          </Skeleton.Text>
        </VStack>
      </HStack>
      <Box size={300} mt={1}>
        <Skeleton height="60%" isLoaded={loaded} borderRadius={12}>
          <Image
            borderRadius={12}
            source={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
            alt="NativeBase logo"
            size={200}
          />
        </Skeleton>
      </Box>
    </VStack>
  );
}

export const Example = () => {
  return (
    <VStack space={4}>
      <CompositionComponent />
    </VStack>
  );
};
