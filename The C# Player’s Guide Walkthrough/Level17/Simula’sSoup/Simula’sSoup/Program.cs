Seasoning AskForSeasoning() {
    Console.WriteLine(@"Choose a seasoning:
    - Spicy
    - Sweet
    - Salty");
    string seasoning = Console.ReadLine();

    return seasoning switch {
        "spicy" => Seasoning.Spicy,
        "sweet" => Seasoning.Sweet,
        "salty" => Seasoning.Salty,
        _ => AskForSeasoning()
    };

}

MainIngredient AskForMainIngredient() {
    Console.WriteLine(@"Choose a main ingredient:
    - Mushrooms
    - Chicken
    - Carrots
    - Potatoes");

    string ingredient = Console.ReadLine();

    return ingredient switch {
        "mushrooms" => MainIngredient.Mushrooms,
        "chicken" => MainIngredient.Chicken,
        "carrots" => MainIngredient.Carrots,
        "potatoes" => MainIngredient.Potatoes,
        _ => AskForMainIngredient()
    };
}


FoodType AskForFoodType() {
    Console.WriteLine(@"Choose a food type:
    - Soup
    - Stew
    - Gumbo");

    string foodType = Console.ReadLine();

    return foodType switch {
        "soup" => FoodType.Soup,
        "stew" => FoodType.Stew,
        "gumbo" => FoodType.Gumbo,
        _ => AskForFoodType()
    };
}

(Seasoning seasoning, MainIngredient ingredient, FoodType type) recipe = (AskForSeasoning(), AskForMainIngredient(), AskForFoodType());

Console.WriteLine($"{recipe.seasoning} {recipe.ingredient} {recipe.type}");
    
enum Seasoning {Spicy, Salty, Sweet};
enum MainIngredient {Mushrooms, Chicken, Carrots, Potatoes};
enum FoodType {Soup, Stew, Gumbo};