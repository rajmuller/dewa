import { ChangeEvent, FC, useCallback, useState } from "react";
import { Flex, Switch } from "@chakra-ui/react";

const Admin: FC = () => {
  let editableToken: boolean;
  if (typeof localStorage !== "undefined") {
    editableToken = !!localStorage.getItem("siteEditable");
  }

  const [checked, setChecked] = useState(editableToken);

  const onChange = useCallback(() => {
    setChecked((previous) => !previous);
    localStorage.setItem("siteEditable", !checked.toString);
  }, []);

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
