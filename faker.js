import { faker } from "@faker-js/faker";

const generateFakeData = () => {
  const name = faker.commerce.productName();
  const img = faker.image.imageUrl();
  const nsn = faker.commerce.isbn({ variant: 13, separator: " " });
  const price = faker.commerce.price();
  const description = faker.lorem.paragraph();

  return { name, img, nsn, price, description };
};

const randomItem = generateFakeData();

console.log(randomItem);
