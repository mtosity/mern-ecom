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
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
exports.SideCateLink = ({ title }) => {
    const [hovered, setHovered] = react_1.useState(false);
    return (<a href="" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="flex-1 flex items-center px-2 hover:bg-gray-400 flex justify-between hover:text-blue-700">
      {title}
      <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faArrowRight} className={hovered ? "" : "hidden"}/>
    </a>);
};
