import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export function App() {
  return (
    <Box as="main" minH="100dvh" bg="bg.subtle">
      <Container maxW="6xl" py={{ base: "12", md: "20" }}>
        <Stack gap="8">
          <Stack gap="3" maxW="3xl">
            <Text
              textTransform="uppercase"
              letterSpacing="widest"
              fontSize="sm"
              color="fg.muted"
            >
              Scripture Graph
            </Text>
            <Heading size={{ base: "4xl", md: "5xl" }}>
              Explore a passage through its scriptural neighborhood.
            </Heading>
            <Text fontSize="lg" color="fg.muted">
              The application shell is ready. The next slice is verse lookup,
              weighted cross-reference loading, and an interactive local graph.
            </Text>
          </Stack>

          <Box
            minH="50vh"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            bg="bg"
            display="grid"
            placeItems="center"
          >
            <Text color="fg.muted">Graph canvas</Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
