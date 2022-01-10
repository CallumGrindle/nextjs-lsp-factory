import { LSPFactory } from "@lukso/lsp-factory.js";

export async function getLspFactory(): Promise<LSPFactory> {
  return new LSPFactory("https://rpc.l14.lukso.network", {
    deployKey: "...",
    chainId: 22,
  });
}
