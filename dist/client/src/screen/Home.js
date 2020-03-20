"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Banner_1 = require("../components/Banner");
const FeatureCategories_1 = require("../components/FeatureCategories");
const MiddleTitle_1 = require("../components/MiddleTitle");
const ProductList_1 = require("../components/ProductList");
const MiddleBanner_1 = require("../components/MiddleBanner");
const ProductSlider_1 = require("../components/ProductSlider");
const Reviews_1 = require("../components/Reviews");
exports.Home = () => {
    return (<div className="w-full">
        <Banner_1.Banner />
        <FeatureCategories_1.FeatureCategories />
        <MiddleTitle_1.MiddleTitle title="New Arrivals"/>
        <ProductList_1.ProductList />
        <MiddleBanner_1.MiddleBanner />
        <MiddleTitle_1.MiddleTitle title="Featured Products"/>
        <ProductSlider_1.ProductSlider />
        <Reviews_1.Reviews />
    </div>);
};
