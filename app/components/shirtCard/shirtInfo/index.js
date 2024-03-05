"use client";

import { Image, Card, Group, Text, Title, Button, Stack } from "@mantine/core";
import ShirtCarousel from "../carousel/carousel";
import { IconArrowRight } from "@tabler/icons-react";


export default function ShirtInfo() {
  
  return (
    <Card
      radius="md"
      padding="xl"
      style={{
        // maxWidth: "40rem",
        minWidth: "15rem",
        backgroundColor: "#e9e6ed",
      }}
    >
      <Card.Section>
        <ShirtCarousel></ShirtCarousel>
      </Card.Section>
      <Stack gap={30}>
        <Group gap={15} justify="space-between" mt="lg">
          <Title fw={800} order={1}>
            Some info about the shirt
          </Title>

          <Text fz="lg" fw={500}>
            $25.00
          </Text>
        </Group>
        <Text>Description Text that should be under the title</Text>
        <Button
          radius="sm"
          style={{
            maxWidth: "20rem",
            height: "4rem",
            backgroundColor: "#202020",
            minWidth: "10rem",
          }}
        >
          <Group justify="space-between" style={{ width: "100%" }}>
            <Text fw={700}>SHOP</Text>
            <IconArrowRight></IconArrowRight>
          </Group>
        </Button>
      </Stack>
    </Card>
  );
}
