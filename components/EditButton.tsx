import { FC } from "react";
import { TinaCMS } from "tinacms";

type EditButtonProps = {
  cms: TinaCMS;
};

const EditButton: FC<EditButtonProps> = ({ cms }) => {
  return (
    <button type="button" onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </button>
  );
};

export default EditButton;
