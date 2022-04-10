//This is variable for get HTML .Element.
const rdProductul = document.querySelector(".rd_product");

// This is object contain info about Product.
let productrd = [
  {
    name: "Air HS",
    image: "./assets/img/rd_product_2.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    http: "./airhs.html",
    newProduct: false,
    description: "Durable and comfortable in wind, and watery",
    price: 2500,
    areaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "forest",
    ventilationZipper: "Yes",
    weight: "4000 G",
  },
  {
    name: "Air km",
    image: "./assets/img/rd_product_2.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    price: 2500,
    areaOfUse: "hiking",
    sex: "female",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    vreaOfUse: "forest",
    ventilationZipper: "yes",
    weight: "4000 G",
  },
  {
    name: "Five HS",
    image: "./assets/img/rd_product_1.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Durable and comfortable in wind, and watery",
    price: 4030,
    areaOfUse: "winter",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "Yes",
    weight: "2500 G",
  },
  {
    name: "Five JS",
    image: "./assets/img/rd_product_1.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Durable and comfortable in wind, and watery",
    price: 3000,
    careaOfUse: "winter",
    sex: "female",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "Yes",
    weight: "2500 G",
  },
  {
    name: "Puffy Ls",
    image: "./assets/img/rd_product_3.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "skiing",
    sex: "female",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Mount",
    ventilationZipper: "No",
    weight: "2200 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
  {
    name: "Valdez Frost",
    image: "./assets/img/rd_product_4.png",
    imageDescription: "Picture of a winter jacket and color of jacket is green",
    newProduct: false,
    description: "Ski jacket in water wind-repellent material",
    price: 3000,
    careaOfUse: "hiking",
    sex: "male",
    productDescription:
      "Durable and comfortable in wind, and watery.practical ventilation zippers under the sleeve for effective temperature control if desired. Five HS can also be easily compressed and takes up little space in the backpack on the go.Helmet-compatible hood with adjustment options provides extra with protection against weather and wind. Extra reinforced front pockets with water-repellent zipper for easy access.",
    fit: "Normal",
    areaOfUse: "Alpin",
    ventilationZipper: "No",
    weight: "4000 G",
  },
];

// This is for testing of object is working
//console.log(productrd);

// function to loop through object and add to product page.
function productPage(productrd) {
  //new variable for object
  let result = productrd;

  //new test for object
  //console.log(result);

  for (let i = 0; i < result.length; i++) {
    //testing after object going trough the loop
    //console.log(result[i].name);
    if (
      /* this like for */
      result[i].name != null &&
      result[i].image != null &&
      result[i].imageDescription != null &&
      result[i].description != null &&
      result[i].price != null
    ) {
      rdProductul.innerHTML += `
        <div class="show_product_container" onclick="location.href='../product/airhs.html'">
          <div class="show_product_header">
            <img 
              src="${result[i].image}"
              alt="${result[i].imageDescription}"
              class="img_show_product"
          </div>
          <div class=""show_product_main>
            <h3 class="header_page_showproduct">
              ${result[i].name}
            </h3>
            <p class="page_text">
              ${result[i].description}
            </p>
            <p class="show_product_price">
              ${result[i].price}
            <p>
          </div>
          <div class=""show_product_footer>
          <button  class="btn_product" onclick="location.href='../product/airhs.html'">
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
          </div>
        </div>
      `;
    } else
      result[i].name != null &&
        result[i].description != null &&
        result[i].price != null &&
        result[i].newProduct == true;
    {
      `
        <div>
          
        </div>
      `;
    }
  }
}

productPage(productrd);
