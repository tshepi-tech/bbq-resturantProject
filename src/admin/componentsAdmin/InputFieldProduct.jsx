//Project files
import InputCategory from "./InputCategory";
import inputSetupProducts from "../../data/inputSetupProducts.json";
import { useRestaurant } from "../../state/RestaurantContext";

export default function InputFieldProduct({ onCreate }) {
  const {
    category,
    setCategory,
    title,
    setTitle,
    details,
    setDetails,
    description,
    setDescription,
    ingredients,
    setIngredients,
    price,
    setPrice,
    imageURL,
    setImageURL,
    imageAlt,
    setImageAlt,
    heroURL,
    setHeroURL,
    heroAlt,
    setHeroAlt,
  } = useRestaurant();

  return (
    <div>
      <form onSubmit={onCreate}>
        <InputCategory
          state={[category, setCategory]}
          setup={inputSetupProducts.category}
        />
        <InputCategory
          state={[title, setTitle]}
          setup={inputSetupProducts.title}
        />
        <InputCategory
          state={[details, setDetails]}
          setup={inputSetupProducts.details}
        />
        <InputCategory
          state={[description, setDescription]}
          setup={inputSetupProducts.description}
        />
        <InputCategory
          state={[ingredients, setIngredients]}
          setup={inputSetupProducts.ingredients}
        />
        <InputCategory
          state={[price, setPrice]}
          setup={inputSetupProducts.price}
        />
        <InputCategory
          state={[imageURL, setImageURL]}
          setup={inputSetupProducts.imageURL}
        />
        <InputCategory
          state={[imageAlt, setImageAlt]}
          setup={inputSetupProducts.imageAlt}
        />
        <InputCategory
          state={[heroURL, setHeroURL]}
          setup={inputSetupProducts.heroURL}
        />
        <InputCategory
          state={[heroAlt, setHeroAlt]}
          setup={inputSetupProducts.heroAlt}
        />
        <button onClick={onCreate}>submit</button>
      </form>
    </div>
  );
}
