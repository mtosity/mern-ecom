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
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const SingleReview_1 = require("./Reviews/SingleReview");
const reviews = [
    {
        name: "Johnathan",
        job: "Web Developer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ratione quis dolorum, id recusandae quia ea nostrum optio quisquam iusto voluptatibus dolores expedita animi consequuntur possimus totam quibusdam praesentium ipsam!"
    },
    {
        name: "Johnathan",
        job: "Web Developer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ratione quis dolorum, id recusandae quia ea nostrum optio quisquam iusto voluptatibus dolores expedita animi consequuntur possimus totam quibusdam praesentium ipsam!"
    },
    {
        name: "Johnathan",
        job: "Web Developer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ratione quis dolorum, id recusandae quia ea nostrum optio quisquam iusto voluptatibus dolores expedita animi consequuntur possimus totam quibusdam praesentium ipsam!"
    }
];
exports.Reviews = () => {
    const [section, setSecion] = react_1.useState(0);
    return (<div className="w-full flex flex-col items-center justify-center py-24" style={{
        backgroundImage: "linear-gradient(to right top, #f50057, #f42256, #f43356, #f33f56, #f24a57)"
    }}>
      <div className="overflow-hidden">
        <div className="flex transform duration-700" style={{
        width: "500px",
        transform: `translateX(${section * -500}px)`
    }}>
          <SingleReview_1.SingleReview />
          <SingleReview_1.SingleReview />
          <SingleReview_1.SingleReview />
        </div>
      </div>
      <div className="flex w-24 justify-between mt-8">
        <react_fontawesome_1.FontAwesomeIcon className="cursor-pointer" icon={section === 0 ? free_solid_svg_icons_1.faCircle : free_regular_svg_icons_1.faCircle} color="white" onClick={() => setSecion(0)}/>
        <react_fontawesome_1.FontAwesomeIcon className="cursor-pointer" icon={section === 1 ? free_solid_svg_icons_1.faCircle : free_regular_svg_icons_1.faCircle} color="white" onClick={() => setSecion(1)}/>
        <react_fontawesome_1.FontAwesomeIcon className="cursor-pointer" icon={section === 2 ? free_solid_svg_icons_1.faCircle : free_regular_svg_icons_1.faCircle} color="white" onClick={() => setSecion(2)}/>
      </div>
    </div>);
};
