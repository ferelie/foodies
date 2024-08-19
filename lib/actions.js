"use server";
import { redirect } from "next/navigation";
import { insertMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim().length === 0;
};

const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    throw new Error("All fields are required!");
  }

  await insertMeal(meal);
  redirect("/meals");
};

export { shareMeal };
