"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProductCard_1 = require("./Product/ProductCard");
exports.ProductList = () => {
    return (<div>
      <div className="w-full flex justify-between px-16 pb-16">
        <ProductCard_1.ProductCard />
        <ProductCard_1.ProductCard />
        <ProductCard_1.ProductCard />
        <ProductCard_1.ProductCard />
      </div>
      <div className="w-full flex justify-between px-16 pb-16">
        <ProductCard_1.ProductCard />
        <ProductCard_1.ProductCard />
        <ProductCard_1.ProductCard />
        <ProductCard_1.ProductCard />
      </div>
    </div>);
};
