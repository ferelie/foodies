import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

const getMeals = async () => {
  return db.prepare("SELECT * FROM meals").all();
};

const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

const insertMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const ext = meal.image.name.split(".").pop();

  const date = new Date();
  const dateString = date
    .toISOString()
    .replace(/-|T|:\..+/g, "")
    .replace(/:/g, "")
    .slice(0, 12);
  const fileName = `${meal.slug}-${dateString}.${ext}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(`Saving image failed!`);
    }
  });
  meal.image = `/images/${fileName}`;
  db.prepare(
    `INSERT INTO meals (title, image, summary, instructions, creator, creator_email, slug)
     VALUES (@title, @image, @summary, @instructions, @creator, @creator_email, @slug)`
  ).run(meal);
};

export { getMeals, getMeal, insertMeal };
