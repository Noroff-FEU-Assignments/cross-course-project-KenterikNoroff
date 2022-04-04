//This is variable for get HTML .Element.
const rdProductul = document.querySelector(".product_body");

// This is Array for Product information.
let raindayProduct = {
  [1]: {
    productName: "Air HS",
    image: "../assets/img/rd_product_2",
    description: "Durable and comfortable in wind, and watery",
    Price: 2000,
    areaOfUse: "hiking",
    sex: "male",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "forest",
      VentilationZipper: "Nei",
      weight: "1500 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
  [2]: {
    productName: "Air HS",
    image: "../assets/img/rd_product_2",
    description: "Durable and comfortable in wind, and watery",
    Price: 2000,
    areaOfUse: "hiking",
    sex: "female",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "Forest",
      VentilationZipper: "Nei",
      weight: "1500 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
  [3]: {
    productName: "Five HS",
    image: "../assets/img/rd_product_1",
    description: "Durable and comfortable in wind, and watery",
    Price: 2000,
    areaOfUse: "winter",
    sex: "male",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "Alpin",
      VentilationZipper: "Yes",
      weight: "2500 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
  [4]: {
    productName: "Five HS",
    image: "../assets/img/rd_product_1",
    description: "Warm versatile & comfortable ski jacket",
    Price: 2000,
    areaOfUse: "winter",
    sex: "female",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "Aplin",
      VentilationZipper: "Yes",
      weight: "2500 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
  [5]: {
    productName: "Puffy Ls",
    image: "../assets/img/rd_product_3",
    description: "Ski jacket in water wind-repellent material",
    Price: 2000,
    areaOfUse: "skiing",
    sex: "female",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "Mount",
      VentilationZipper: "Nei",
      weight: "2200 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
  [6]: {
    productName: "Puffy Ls",
    image: "../assets/img/rd_product_3",
    description: "Ski jacket in water wind-repellent material",
    Price: 2000,
    areaOfUse: "skiing",
    sex: "female",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "Mount",
      VentilationZipper: "Nei",
      weight: "2200 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
  [7]: {
    productName: "Valdez Frost",
    image: "../assets/img/rd_product_4",
    description: "Ski jacket in water wind-repellent material",
    Price: 2000,
    areaOfUse: "hiking",
    sex: "male",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "",
      VentilationZipper: "Nei",
      weight: "4000 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
  [8]: {
    productName: "Valdez Frost",
    image: "../assets/img/rd_product_4",
    description: "Ski jacket in water wind-repellent material",
    Price: 2000,
    careaOfUse: "hiking",
    sex: "female",
    Specifications: {
      fit: "Normal",
      AreaOfUse: "Alpin",
      VentilationZipper: "Nei",
      weight: "4000 G",
    },
    ProductDescription: {
      [1]: "Durable and comfortable in wind, and watery",
      [2]: "practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.",
      [3]: "Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    },
  },
};

// This is for seeing if array work
console.log(raindayProduct);
