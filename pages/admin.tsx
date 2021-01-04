import { FC, useCallback, useEffect, useState } from "react";
import { Flex, Switch } from "@chakra-ui/react";
import {
  editableSiteSelector,
  setEditableSiteSelector,
  useStore,
} from "../store";

const Admin: FC = () => {
  const editableSite = useStore(editableSiteSelector);
  const [checked, setChecked] = useState<boolean>(false);

  const setEditableSite = useStore(setEditableSiteSelector);

  const onChange = useCallback(() => {
    setEditableSite(!editableSite);
  }, [editableSite, setEditableSite]);

  useEffect(() => {
    if (checked !== editableSite) {
      setChecked(editableSite);
    }
  }, [checked, editableSite]);

  return (
    <Flex pt={20}>
      <Switch
        size="lg"
        colorScheme="secondary"
        isChecked={checked}
        onChange={onChange}
      />
    </Flex>
  );
};

export default Admin;
