import { Container, SimpleGrid } from "@mantine/core";
import ShirtCard from "../shirtCard";

export default function ShirtGrid() {
  return (
    <Container size="xl">
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 2 }}  
        spacing="xs"
        verticalSpacing="xs">
          <ShirtCard></ShirtCard>
          <ShirtCard></ShirtCard>
          <ShirtCard></ShirtCard>
          <ShirtCard></ShirtCard>
      </SimpleGrid>
    </Container>
  )
}