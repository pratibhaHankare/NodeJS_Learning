const path = require('path');
const fs=require('fs');

const pathName = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json');


const getProductsFromFile= cb=>{
    fs.readFile(pathName,(err,fileContent)=>{
        if(err){
             cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product{
    constructor(title,imageUrl,price,description){
        this.titleName = title;
        this.imageUrlName = imageUrl;
        this.priceNumber = price;
        this.descriptionDetails = description;
    }
    save(){
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(pathName,JSON.stringify(products),err=>{
                console.log(err);
            });
        });
    }
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}