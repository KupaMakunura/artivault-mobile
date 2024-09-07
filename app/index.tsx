import { TamaguiProvider } from "@tamagui/core";
import { Button } from "tamagui";

import React from "react";

export default () => {
  return (
    <TamaguiProvider>
      <Button>Click me</Button>
    </TamaguiProvider>
  );
};
