import { AddressZero } from "@ethersproject/constants";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { NFTCollection } from "../src/contracts";
import { sdk, signers, storage } from "./before.test";

global.fetch = require("node-fetch");

describe("NFT Contract", async () => {
  type NewType = NFTCollection;
  let nftContract: NewType;
  let adminWallet: SignerWithAddress,
    samWallet: SignerWithAddress,
    bobWallet: SignerWithAddress;

  before(() => {
    [adminWallet, samWallet, bobWallet] = signers;
  });

  beforeEach(async () => {
    sdk.updateSignerOrProvider(adminWallet);
    const address = await sdk.deployer.deployContract(
      NFTCollection.contractType,
      {
        name: "NFT Contract",
        description: "Test NFT contract from tests",
        image:
          "https://pbs.twimg.com/profile_images/1433508973215367176/XBCfBn3g_400x400.jpg",
        primary_sale_recipient: adminWallet.address,
        seller_fee_basis_points: 1000,
        fee_recipient: AddressZero,
        platform_fee_basis_points: 10,
        platform_fee_recipient: AddressZero,
      },
    );
    nftContract = sdk.getNFTCollection(address);
  });

  it("should return nfts even if some are burned", async () => {
    await nftContract.mint({
      name: "Test1",
    });
    const token = await nftContract.mint({
      name: "Test2",
    });
    await nftContract.burn(token.id);
    const nfts = await nftContract.getAll();
    expect(nfts).to.be.an("array").length(2);
  });

  it("should respect pagination", async () => {
    const nfts = [];
    for (let i = 0; i < 100; i++) {
      nfts.push({
        name: `Test${i}`,
      });
    }
    await nftContract.mintBatch(nfts);
    const total = await nftContract.getTotalCount();
    expect(total.toNumber()).to.eq(100);
    const page1 = await nftContract.getAll({
      count: 2,
      start: 0,
    });
    expect(page1).to.be.an("array").length(2);
    const page2 = await nftContract.getAll({
      count: 2,
      start: 20,
    });
    expect(page2).to.be.an("array").length(2);
    expect(page2[0].metadata.name).to.eq("Test20");
    expect(page2[1].metadata.name).to.eq("Test21");
  });

  it("should fetch a single nft", async () => {
    await nftContract.mint({
      name: "Test1",
    });
    const nft = await nftContract.get("0");
    assert.isNotNull(nft);
    assert.equal(nft.metadata.name, "Test1");
  });

  it("should mint with URI", async () => {
    const uri = await storage.uploadMetadata({
      name: "Test1",
    });
    await nftContract.mint(uri);
    const nft = await nftContract.get("0");
    assert.isNotNull(nft);
    assert.equal(nft.metadata.name, "Test1");
  });

  it("should mint batch with URI", async () => {
    const uri = await storage.uploadMetadata({
      name: "Test1",
    });
    await nftContract.mintBatch([uri]);
    const nft = await nftContract.get("0");
    assert.isNotNull(nft);
    assert.equal(nft.metadata.name, "Test1");
  });

  it("should return an owner as zero address for an nft that is burned", async () => {
    const token = await nftContract.mint({
      name: "Test2",
    });
    await nftContract.burn(token.id);
    const nft = await nftContract.get("0");
    assert.equal(nft.owner, AddressZero);
  });

  it("should correctly mint nfts in batch", async () => {
    const metas = [
      {
        name: "Test1",
      },
      {
        name: "Test2",
      },
    ];
    const batch = await nftContract.mintBatch(metas);
    assert.lengthOf(batch, 2);

    for (const meta of metas) {
      const nft = batch.find(
        async (n) => (await n.data()).metadata.name === meta.name,
      );
      assert.isDefined(nft);
    }
  });

  it("should not be able to mint without permission", async () => {
    sdk.updateSignerOrProvider(samWallet);
    await expect(
      nftContract.mint({
        name: "Test2",
      }),
    ).to.throw;
  });

  it("should mint complex metadata", async () => {
    const tx = await nftContract.mint({
      name: "Test2",
      description: "description",
      image: "https://img.net",
      animation_url: "https://img.net",
      background_color: "#000000",
      external_url: "https://img.net",
      properties: {
        arr: ["1", "2", "3"],
        obj: {
          anum: 12,
          astr: "123",
        },
        val: "1234",
      },
      arr: ["1", "2", "3"],
      obj: {
        anum: 12,
        astr: "123",
      },
      val: "1234",
    });
    expect(tx.id.toNumber()).to.eq(0);
  });
});
