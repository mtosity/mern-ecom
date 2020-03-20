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
exports.PopupIcon = ({ icon }) => {
    const [hover, setHover] = react_1.useState(false);
    return (<div className="p-4 bg-white mx-2 rounded hidden group-hover:block z-10 hover:bg-red-600 hover:text-white cursor-pointer
        " onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <react_fontawesome_1.FontAwesomeIcon icon={icon} color={hover === false ? "gray" : "white"}/>
    </div>);
};
