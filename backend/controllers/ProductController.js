import ProductsModel from "../models/ProductsModel.js";

const addProduct = async (req, res) => {
  //let image_filename = `${req.file.filename}`;

  const { name, description, price, image, category } = req.body;

  const product = new ProductsModel({
    name,
    description,
    price,
    image,
    category,
  });
  try {
    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error In Product Adding" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await ProductsModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error In Products Loading" });
  }
};

const updateProduct = async (req, res) => {
  let productId = req.params.id;

  const { name, description, price, image, category } = req.body;

  const updateProduct = {
    name,
    description,
    price,
    image,
    category,
  };

  try {
    await ProductsModel.findByIdAndUpdate(productId, updateProduct);
    res.json({ success: true, data: updateProduct });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error In Product Updating" });
  }
};

const getDetailsById = async(req, res) => {
  let productId = req.params.id;
  try {
    const product = await ProductsModel.findById(productId);
    res.json({success: true, data: product})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error in Data Loading"});
    
  }
}

const removeProduct = async (req, res) => {
  try {
    let productId = req.params.id;
    await ProductsModel.findByIdAndDelete(productId);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in Product Removing" });
  }
};

export { addProduct, getProducts, removeProduct, updateProduct, getDetailsById };
