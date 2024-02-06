export default function Content() {

    let categoryItems = ['OCS & Ranger School', 'ROTC/JROTC Items', 'Clothing', 'Uniform Accessories', 'Crests', 'Eyewear', 'Field Equipment', 'Flashlights', 'Footwear & Accessories', 'Gifts, Novelty, Books/Manuals', 'Headwear', 'Knives & Tools', 'New Arrivals', 'Tactical Gear', 'Weapons Accessories', 'Clearance'];
    let popularBrands = ['Propper', 'CamelBak', 'Tru Spec', 'Rite in the Rain', 'Benchmade', 'Oakley', 'Raine', 'Sua Sponte', 'Gerber', 'Tasmanian Tiger', 'View All'];  
    let ocsRangerSchoolItems = ['All OCS & Ranger School', 'OCS - Click Here', 'Ranger School - Click Here'];
    // const [selectedCategory, setSelectedCategory] = useState(null);
    
    const handleAccordionClick = (category) => {
        setSelectedCategory(category);
      };
    return (
    <div id="content">
        <div id="categoriesAndBrands">
      <div id="categories">
        <a className="theWordCategories">CATEGORIES</a>
        
        <div id="categoriesList">
            {categoryItems.map((category) => (
                <button className="accordian" key={category}>{category}</button>))}
        </div>
      </div>
      <div id="popularBrands">
        <a className="popularBrands">POPULAR BRANDS</a>
        
        <div id="brandsList">
            {popularBrands.map((brand) => (
                <button className={brand}key={brand}>{brand}</button>
            ))}
        </div>
      </div>
      </div>
      <img
        id="item"
        src="https://cdn11.bigcommerce.com/s-cyn7ecnpcb/images/stencil/608x608/products/2723/3064/6932__13776.1653424122.jpg?c=1"
      ></img>
    </div>
  );
}