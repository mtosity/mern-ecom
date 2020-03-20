"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const AdminInputTitle_1 = require("../Content/AdminInputTitle");
const AdminInput_1 = require("../Content/AdminInput");
const AdminInputRange_1 = require("../Content/AdminInputRange");
const AdminButton_1 = require("../Content/AdminButton");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
exports.AddProductForm = () => {
    const genders = ["female", "male", "both"];
    const [title, setName] = react_1.useState("");
    const [description, setDescription] = react_1.useState("");
    const [quantity, setQuantity] = react_1.useState([5]);
    const [originPrice, setOriginPrice] = react_1.useState("");
    const [salePrice, setSalePrice] = react_1.useState("");
    const [imgUrl, setImgUrl] = react_1.useState("");
    const [cate, setCate] = react_1.useState("");
    const [cates, setCates] = react_1.useState([]);
    const [loadCate, setLoadCate] = react_1.useState(true);
    const [gender, setGender] = react_1.useState(genders[0]);
    react_1.useEffect(() => {
        fetch("/api/category").then(res => {
            res
                .json()
                .then(data => {
                const categories = data;
                setCates(categories);
                setLoadCate(false);
                setCate(categories[0].id);
            });
        });
    }, []);
    const addProduct = async () => {
        const body = {
            title: title,
            description: description,
            quantity: quantity[0],
            image: imgUrl,
            originPrice: originPrice,
            salePrice: salePrice,
            categoryID: cate,
            gender: gender
        };
        const res = await fetch("/api/product", {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (res.status === 200) {
            const { msg } = await res.json();
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">${msg}</p>`,
                icon: "success",
                showCancelButton: true,
                background: "#1E2A31"
            });
        }
        else {
            const { errors } = await res.json();
            sweetalert2_1.default.fire({
                title: `<p class="text-admin-title">${errors[0].message}</p>`,
                icon: "error",
                background: "#1E2A31"
            });
        }
    };
    return (<>
      <AdminInputTitle_1.AdminInputTitle title="Title"/>
      <AdminInput_1.AdminInput type="text" placeholder="Some clothes" name="title" value={title} onChange={setName}/>
      <div className="w-1/2 flex">
        <div className="flex-1">
          <AdminInputTitle_1.AdminInputTitle title="Select product category"/>
          {loadCate ? (<div>Loading categories</div>) : (<select onChange={e => {
        setCate(e.target.value);
    }} value={cate} className="bg-admin-card w-3/4 outline-none p-2 border border-admin-word focus:border-admin-input">
              {cates.map((c) => {
        return (<option value={c.id} key={c.id}>
                    {c.name}
                  </option>);
    })}
            </select>)}
        </div>
        <div className="flex-1">
          <AdminInputTitle_1.AdminInputTitle title="Gender for this product"/>
          <select onChange={e => {
        setGender(e.target.value);
    }} value={gender} className="bg-admin-card w-3/4 outline-none p-2 border border-admin-word focus:border-admin-input">
            {genders.map(c => {
        return (<option value={c} key={c}>
                  {c}
                </option>);
    })}
          </select>
        </div>
      </div>
      <AdminInputTitle_1.AdminInputTitle title="Description" classname="mt-4"/>
      <AdminInput_1.AdminInput type="text" placeholder="This hat is awesome" name="description" textarea value={description} onChange={setDescription}/>
      <AdminInputTitle_1.AdminInputTitle title="Quantity"/>
      <AdminInputRange_1.AdminInputRange min={0} max={60} step={1} values={quantity} onChange={setQuantity}/>
      <AdminInputTitle_1.AdminInputTitle title="Original price"/>
      <AdminInput_1.AdminInput type="number" placeholder="0" name="originPrice" value={originPrice} onChange={setOriginPrice}/>
      <AdminInputTitle_1.AdminInputTitle title="Sale price"/>
      <AdminInput_1.AdminInput type="number" placeholder="0" name="salePrice" value={salePrice} onChange={setSalePrice}/>
      <AdminInputTitle_1.AdminInputTitle title="Image url"/>
      <AdminInput_1.AdminInput type="text" placeholder="imgur" name="salePrice" value={imgUrl} onChange={setImgUrl}/>
      <div className="mt-4">
        <AdminButton_1.AdminButton title="Add product" onClick={addProduct}/>
      </div>
    </>);
};
