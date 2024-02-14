import { faker } from "@faker-js/faker";
import fs from "fs";

const generateFakeData = () => {
  const name = faker.commerce.productName();
  const img = faker.image.url();
  const nsn = faker.commerce.isbn({ variant: 13, separator: " " });
  const price = faker.commerce.price();
  const brand = faker.lorem.slug({ min: 1, max: 3 });
  const description = faker.lorem.paragraphs(5);

  return { name, img, nsn, brand, price, description };
};

const generateInsertStatements = (tableName, data, batchSize = 1000) => {
  let insertStatements = [];

  for (let i = 0; i < data.length; i += batchSize) {
    const batchData = data.slice(i, i + batchSize);
    const values = batchData
      .map((item) => {
        return `('${item.name}', '${item.img}', '${item.nsn}', '${item.price}', '${item.brand}', '${item.description}')`;
      })
      .join(",\n");

    const query = `INSERT INTO ${tableName} (name, img, nsn, price, brand, description) VALUES\n${values};\n`;
    insertStatements.push(query);
  }

  return insertStatements;
};

const fakeData = Array.from({ length: 2000000 }, generateFakeData);
const insertStatements = generateInsertStatements("items", fakeData);

fs.appendFileSync("./sql/seed.sql", insertStatements.join("\n"));
