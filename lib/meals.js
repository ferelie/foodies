import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  // await new Promise(resolve => setTimeout(resolve, 4000));

  // throw new Error('Loading meals Failed!');

  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}