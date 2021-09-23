import React from 'react';
import { Skeleton, Stack } from 'native-base';

export const Example = () => {
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={6}
        alignItems="center"
        justifyContent="center"
        w={{ base: '100%', md: '50%' }}
        h="100%"
      >
        <Skeleton
          borderRadius={4}
          startColor="cyan.200"
          endColor="emerald.200"
          h={{ base: '40%', md: '25%' }}
          w={{ base: '80%', md: '25%' }}
        />
        <Stack
          w={{ base: '100%', md: '50%' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          space={{ base: 6, md: 8 }}
          direction={{ base: 'column', md: 'column' }}
        >
          <Skeleton.Text
            w={{ base: '80%', md: '80%' }}
            noOfLines={3}
            mt={4}
            lineHeight={4}
            space={3}
            startColor="gray.100"
            endColor="gray.200"
            h={74}
            borderRadius={20}
          />
          <Skeleton
            borderRadius={4}
            startColor="indigo.100"
            endColor="indigo.200"
            h="10"
            w={{ base: '80%', md: '80%' }}
          />
        </Stack>
      </Stack>
    </>
  );
};
