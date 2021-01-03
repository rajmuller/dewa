import { FC } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { TinaCMS } from "tinacms";

import { EditIcon } from "./icons";

type EditButtonProps = {
  cms: TinaCMS;
};

const EditButton: FC<EditButtonProps> = ({ cms }) => {
  return (
    <Box position="fixed" bottom={4} right={4}>
      <IconButton
        aria-label="edit page"
        size="lg"
        colorScheme="secondary"
        p={4}
        borderRadius="xl"
        fontSize="3xl"
        icon={<EditIcon fill="white" />}
        onClick={() => cms.toggle()}
      >
        {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
      </IconButton>
    </Box>
  );
};

export default EditButton;
