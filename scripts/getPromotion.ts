import { park2EarnContract } from "./initialiseContract";

async function main() {
  const promotion = await park2EarnContract.getPromotion(1);
  console.log("Promotion", promotion);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
