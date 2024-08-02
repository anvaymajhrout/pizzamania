const pizzaTypes = {
    spicy: [
        'Jalapenos', 'Spicy Sausage', 'Sriracha Sauce', 'Red Chili Flakes', 'Hot Sauce', 
        'Pepperoni', 'Banana Peppers', 'Buffalo Chicken', 'Spicy BBQ Sauce', 'Chorizo', 
        'Spicy Italian Sausage', 'Chipotle Peppers', 'Crushed Red Pepper', 'Green Chilies', 
        'Spicy Pepperoni', 'Cayenne Pepper', 'Habanero Peppers', 'Spicy Ground Beef', 
        'Sriracha Chicken', 'Spicy Bacon', 'Black Olives', 'Onions', 'Garlic', 'Feta Cheese', 
        'Sun-dried Tomatoes'
    ],
    normal: [
        'Ham', 'Mushrooms', 'Green Peppers', 'Mozzarella Cheese', 'Onions', 
        'Pepperoni', 'Sausage', 'Bacon', 'Black Olives', 'Tomatoes', 
        'Red Onions', 'Pineapple', 'Anchovies', 'Ground Beef', 'Canadian Bacon', 
        'Spinach', 'Artichokes', 'Eggplant', 'Ricotta Cheese', 'Provolone Cheese', 
        'Parmesan Cheese', 'Chicken', 'Salami', 'Basil', 'Oregano'
    ],
    cheese: [
        'Cheddar Cheese', 'Parmesan Cheese', 'Mozzarella Cheese', 'Provolone Cheese', 'Ricotta Cheese', 
        'Goat Cheese', 'Feta Cheese', 'Blue Cheese', 'Gorgonzola Cheese', 'Asiago Cheese', 
        'Swiss Cheese', 'Brie Cheese', 'Havarti Cheese', 'Fontina Cheese', 'Gruyere Cheese', 
        'Monterey Jack Cheese', 'Colby Cheese', 'Smoked Gouda', 'Pepper Jack Cheese', 'Cottage Cheese', 
        'Cream Cheese', 'Edam Cheese', 'Manchego Cheese', 'Camembert Cheese', 'Pecorino Cheese'
    ],
    bbq: [
        'BBQ Chicken', 'BBQ Sauce', 'Red Onions', 'Cilantro', 'Mozzarella Cheese', 
        'Cheddar Cheese', 'Bacon', 'Pineapple', 'Jalapenos', 'Sweet Corn', 
        'Black Beans', 'Green Peppers', 'Cherry Tomatoes', 'Grilled Chicken', 'BBQ Pulled Pork', 
        'Smoked Sausage', 'Brisket', 'Caramelized Onions', 'Smoky BBQ Sauce', 'Pepper Jack Cheese', 
        'Grilled Onions', 'Coleslaw', 'Sweet Pickles', 'Dill Pickles', 'Ranch Dressing'
    ],
    veggie: [
        'Mushrooms', 'Onions', 'Tomatoes', 'Olives', 'Bell Peppers', 
        'Spinach', 'Artichokes', 'Zucchini', 'Eggplant', 'Broccoli', 
        'Sun-dried Tomatoes', 'Asparagus', 'Green Peppers', 'Red Peppers', 'Yellow Peppers', 
        'Garlic', 'Basil', 'Oregano', 'Rosemary', 'Arugula', 
        'Avocado', 'Pineapple', 'Chili Peppers', 'Cilantro', 'Mint'
    ],
    seafood: [
        'Shrimp', 'Scallops', 'Crab Meat', 'Lobster', 'Anchovies', 
        'Calamari', 'Smoked Salmon', 'Tuna', 'Clams', 'Mussels', 
        'Oysters', 'Octopus', 'Caviar', 'Garlic Butter', 'Lemon Zest', 
        'Dill', 'Parsley', 'Capers', 'Cherry Tomatoes', 'Mozzarella Cheese', 
        'Parmesan Cheese', 'Red Onions', 'Olives', 'Capers', 'Spinach'
    ],
    dessert: [
        'Nutella', 'Marshmallows', 'Chocolate Chips', 'Strawberries', 'Bananas', 
        'Blueberries', 'Raspberries', 'Peanut Butter', 'Caramel Sauce', 'White Chocolate', 
        'Brown Sugar', 'Cinnamon', 'Honey', 'Maple Syrup', 'Cream Cheese Frosting', 
        'Chocolate Sauce', 'Cookie Dough', 'Crushed Oreos', 'Graham Crackers', 'Vanilla Ice Cream', 
        'Whipped Cream', 'Sprinkles', 'Almonds', 'Walnuts', 'Pecans'
    ],
    meatLovers: [
        'Pepperoni', 'Sausage', 'Bacon', 'Ham', 'Ground Beef', 
        'Salami', 'Canadian Bacon', 'Prosciutto', 'Chicken', 'Turkey', 
        'Lamb', 'Duck', 'Pork Belly', 'Brisket', 'Pulled Pork', 
        'Italian Sausage', 'Spicy Sausage', 'Chorizo', 'Meatballs', 'Steak', 
        'Veal', 'Smoked Sausage', 'Kielbasa', 'Bologna', 'Mortadella'
    ],
    glutenFree: [
        'Gluten-Free Crust', 'Mozzarella Cheese', 'Pepperoni', 'Sausage', 'Bacon', 
        'Ham', 'Mushrooms', 'Onions', 'Tomatoes', 'Green Peppers', 
        'Black Olives', 'Spinach', 'Artichokes', 'Zucchini', 'Eggplant', 
        'Ricotta Cheese', 'Parmesan Cheese', 'Cheddar Cheese', 'Feta Cheese', 'Provolone Cheese', 
        'Chicken', 'Salami', 'Basil', 'Oregano', 'Garlic'
    ],
    vegan: [
        'Vegan Cheese', 'Tomato Sauce', 'Spinach', 'Mushrooms', 'Onions', 
        'Green Peppers', 'Tomatoes', 'Black Olives', 'Artichokes', 'Zucchini', 
        'Eggplant', 'Broccoli', 'Sun-dried Tomatoes', 'Avocado', 'Pineapple', 
        'Basil', 'Oregano', 'Garlic', 'Arugula', 'Chili Flakes', 
        'Capers', 'Red Peppers', 'Yellow Peppers', 'Asparagus', 'Tofu'
    ]
};

document.getElementById('generate-btn').addEventListener('click', () => {
    const selectedType = document.getElementById('pizza-type').value;
    const randomIndex = Math.floor(Math.random() * pizzaTypes[selectedType].length);
    const selectedToppings = pizzaTypes[selectedType][randomIndex];
    
    document.getElementById('pizza-name').textContent = `${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Pizza`;
    document.getElementById('pizza-toppings').textContent = `Toppings: ${selectedToppings}`;
});
