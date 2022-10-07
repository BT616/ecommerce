// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedTags = require('../seeds/tag-seeds');

// Products belongsTo Category
Product.belongsTo(Category,{
foreignKey:'category_id'
});

// Categories have many Products
Category.hasMany(Product,{
foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
through:{
  model: ProductTag
}
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag,{

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};