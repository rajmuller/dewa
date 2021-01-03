import { useEffect } from "react";
import { useCMS } from "tinacms";

const useWYSIWYG = () => {
  const cms = useCMS();
  useEffect(() => {
    import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
      cms.plugins.add(MarkdownFieldPlugin);
    });
  }, [cms.plugins]);
};

export default useWYSIWYG;
