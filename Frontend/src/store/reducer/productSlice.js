import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [
        {
            "id": 1,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/7-300x300.png",
            "title": "App Nativa Átomo",
            "description": "Desarrollo de Apps",
            "tags": [
                {
                    "body": "Desarrollo"
                },
                {
                    "body": "Apps"
                }
            ],
            "price": 5000.00
        },
        {
            "id": 2,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/6-300x300.png",
            "title": "App Web Neutrón",
            "description": "Desarrollo de Apps",
            "tags": [
                {
                    "body": "Desarrollo"
                },
                {
                    "body": "Web"
                }
            ],
            "price": 1500000.00
        },
        {
            "id": 3,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/5-1-300x300.png",
            "title": "App Web Positrón",
            "description": "Desarrollo de Apps",
            "tags": [
                {
                    "body": "Desarrollo"
                },
                {
                    "body": "Web"
                }
            ],
            "price": 1200000.00
        },
        {
            "id": 4,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/4-1-300x300.png",
            "title": "Campaña de ADS Átomo",
            "description": "Marketing Digital",
            "tags": [
                {
                    "body": "Marketing"
                }
            ],
            "price": 1200000.00
        },
        {
            "id": 5,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/12-300x300.png",
            "title": "Combo Átomo",
            "description": "Combos",
            "tags": [
                {
                    "body": "Combos"
                }
            ],
            "price": 3500000.00
        },
        {
            "id": 6,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/8-300x300.png",
            "title": "Combo Neutrón",
            "description": "Combos",
            "tags": [
                {
                    "body": "Combos"
                }
            ],
            "price": 2500000.00
        },
        {
            "id": 7,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/12-300x300.png",
            "title": "Combo Positrón",
            "description": "Combos",
            "tags": [
                {
                    "body": "Combos"
                }
            ],
            "price": 1500000.00
        },
        {
            "id": 8,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/09/12-300x300.png",
            "title": "E-commerce Átomo",
            "description": "Tienda Online",
            "tags": [
                {
                    "body": "E-commerce"
                }
            ],
            "price": 1000000.00
        },
        {
            "id": 9,
            "imageUrl": "https://webzillaco.com/wp-content/uploads/2023/08/F18-300x300.png",
            "title": "E-commerce Neutrón",
            "description": "Tienda Online",
            "tags": [
                {
                    "body": "E-commerce"
                }
            ],
            "price": 700000.00
        }
    ],
    filteredProducts: [],
    tags: ["Desarrollo", "Web", "Marketing", "Combos", "E-commerce"],
    price: {
        min: undefined,
        max: undefined
    }
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        filterProduct: (state, action) => {
            const { query } = action.payload;

            let filteredProducts = state.allProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );

            return { ...state, filteredProducts: filteredProducts }
        },
        filterAdvanced: (state, action) => {
            const { tags, price } = action.payload;

            let filteredProducts = state.allProducts;

            console.log(state.allProducts)

            if (tags.length) {
                filteredProducts = filteredProducts.filter(product => tags.some((tag) => product.tags.includes(tag)))
            }

            if (price.min && price.max) {
                filteredProducts = filteredProducts.filter(product => product.price >= price.min && product.price <= price.max)
            }

            console.log(filteredProducts)

            return { ...state, filteredProducts: filteredProducts, price: price }
        },
    },
});

export const { filterProduct, filterAdvanced } = productSlice.actions;
export default productSlice.reducer;