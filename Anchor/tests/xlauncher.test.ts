import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Xlauncher } from "../target/types/xlauncher";
import { assert } from "chai";

describe("xlauncher", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.Xlauncher as Program<Xlauncher>;

  it("Launches a token!", async () => {
    const tx = await program.methods.launchToken("XTOKEN").rpc();
    console.log("Your transaction signature", tx);
    assert.isOk(tx, "Token launched successfully");
  });
});
