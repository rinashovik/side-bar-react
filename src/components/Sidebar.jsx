import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faBars,faList,faComments,faFileInvoiceDollar,faCircleUser,faChartLine,faSliders,faImage,faPhone,faGear } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


// import { FaTh, FaBars,FaUserAlt, LiaCommentSolid, FaShoppingCart } from "react-icons/fa";


function Sidebar({children}) {
  const [isOpen, setIsOpen] = useState(false)
const toggle= ()=> setIsOpen(!isOpen);
  const menuItems = [
    {
  path: "/",
  name: "Dashboard",
 icon:  <FontAwesomeIcon icon={faHouse} />
},

{
  path: "/about",
  name: "About",
  icon: <FontAwesomeIcon icon={faBars} />
}, 

  {
    path: "/analytical",
    name: "Analytical",
    icon: <FontAwesomeIcon icon={faChartLine} />
  },

    {
      path: "/comments",
      name: "Comments",
      icon: <FontAwesomeIcon icon={faComments} />
    }, 

      {
        path: "/products",
        name: "Products",
        icon: <FontAwesomeIcon icon={faList} />
       },

        {
          path: "/image",
          name: "Image",
          icon: <FontAwesomeIcon icon={faImage} /> 
        },
  
        
      {
        path: "/contact",
        name: "Contact",
        icon: <FontAwesomeIcon icon={faPhone} />
      },

          
      {
        path: "/settings",
        name: "Settings",
        icon: <FontAwesomeIcon icon={faGear} />  
      },

        
      {
        path: "/user",
        name: "User",
        icon: <FontAwesomeIcon icon={faCircleUser} />
      } ,
      {
        path: "/payment",
        name: "Payment",
        icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />
      }       
      

]

  return (


    <div className='container'>
    <div className='sidebar' style={{width: isOpen ? "100px": "50px"}}>
      <div className='top_section'>
        <h1 style={{display: isOpen? "block" :"none"}}className='logo'>Logo</h1>
       <div className='bars'>
    <FontAwesomeIcon   icon={faSliders} onClick={toggle} /> 
    {/* <FontAwesomeIcon icon={faSliders} /> */}
     </div>
    </div> 
    <div>
      {menuItems.map((item,index)=> 
        <NavLink to={item.path} key={index} className="link" activeClassName="active">{item.index}
          {/* <div className='icon'><button>{item.icon}{item.name}</button></div> */}
          {/* <div className='icon'><button>{item.icon}</button></div> */}

          <div className='icon'>{item.icon}</div>
          <div className='link_text'>{item.name}</div>


        <div className='link_text'> 
        </div>

         {/* <button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  {item.name}
</button>  */}
        
        </NavLink>
      )}
    </div>

</div>

{/* <button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  hello
</button>  */}

<main>{children}</main>

</div>

    )
}

export default Sidebar