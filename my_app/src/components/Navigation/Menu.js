import { Link } from "react-router-dom";


function Menu() {
  const menuItems = [
    { Name: "about", url: "/about" },
    { Name: "experience", url: "/experience" },
    { Name: "education", url: "/education" },
    { Name: "skills", url: "/skills" },
    { Name: "interest", url: "/interest" },
    { Name: "awards", url: "/awards" }
  ]
  
  

  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.Name}>
            
            <Link className="nav-link js-scroll-trigger" to={item.url}>
              {item.Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
