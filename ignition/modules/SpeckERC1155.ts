import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SpeckERC1155Module = buildModule("SpeckERC1155Module", (m) => {
  const initialOwner = '0x758Dc39D053c771cd81b7E40ba986432f5696BF8'
  const name = "SpeckERC1155";
  const uri = "https://d23sfjq00eyvfy.cloudfront.net/{id}/metadata.json";
  // const uri = "https://assets.speck.finance/{id}/metadata.json";
  const expiresAt = 1735603200;

  const speckERC1155 = m.contract("SpeckERC1155", [initialOwner, name, uri, expiresAt]);

  return { speckERC1155 };
});

export default SpeckERC1155Module;
