"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ProductCard_1 = require("./Product/ProductCard");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
exports.ProductSlider = () => {
    const jump = 270;
    const [x, setX] = react_1.useState(0);
    return (<div className=" w-full pb-16 px-16 ">
      <div className="flex items-center overflow-hidden pb-4 relative">
        <div className=" absolute cursor-pointer z-20 p-2 bg-red-400" onClick={() => setX((x + jump) % (4 * jump))} style={{ left: '5px' }}>
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faArrowLeft} size="2x" color="white"/>
        </div>
        <div className="flex transform duration-700 px-4" style={{ transform: `translateX(${x}px)` }}>
          <ProductCard_1.ProductCard />
          <ProductCard_1.ProductCard />
          <ProductCard_1.ProductCard />
          <ProductCard_1.ProductCard />
          <ProductCard_1.ProductCard />
          <ProductCard_1.ProductCard />
        </div>
        <div className="absolute right-0 p-2 cursor-pointer z-20 bg-red-400" onClick={() => setX((x - jump) % (4 * jump))} style={{ right: '5px' }}>
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faArrowRight} size="2x" color="white"/>
        </div>
      </div>
    </div>);
};
