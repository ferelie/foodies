import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};
export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {` `}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Browse through our collection of delicious recipes</p>
        <p className={classes.cta}>
          {" "}
          <Link href="/meals/share"> Share a recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <h2 className={classes.loading}>
              Please Wait while we fetch data...
            </h2>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
