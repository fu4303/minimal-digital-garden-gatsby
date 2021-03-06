import React from "react";
import { useClipboard } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button
      color="brand.lightGrey"
      aria-label="Copy text"
      textTransform="uppercase"
      fontWeight={600}
      role="button"
      onClick={onCopy}
    >
      {hasCopied ? "Yay!" : "Grab It"}
    </Button>
  );
}
