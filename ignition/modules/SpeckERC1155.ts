import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SpeckERC1155Module = buildModule("SpeckERC1155Module", (m) => {

  const name = "SpeckERC1155";
  const expiresAt = Math.floor(Date.now() / 1000) + 360

  const speckERC1155 = m.contract("SpeckERC1155", [name, expiresAt]);

  return { speckERC1155 };
});

export default SpeckERC1155Module;
