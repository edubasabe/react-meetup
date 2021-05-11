import { Box } from "@chakra-ui/layout";

export default function Card(props) {
  return (
    <Box boxShadow="md" rounded="md" overflow="hidden" maxW="xs" m="8">
      {props.children}
    </Box>
  );
}
