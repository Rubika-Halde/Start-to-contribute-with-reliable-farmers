import { useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Header = () => {
  const [showSidebar, setShowSidebar] = useState<any>(true)
  const menuRef = useRef<any>()
  const closeRef = useRef<any>()

  // console.log(menuRef.current.style.display='none')
  const handleOnMenuClick = () => {
    menuRef.current.style.display = 'none'
    closeRef.current.style.display = 'block'
    setShowSidebar(false)
  }
  const handleOnCloseClick = () => {
    menuRef.current.style.display = 'block'
    closeRef.current.style.display = 'none'
    setShowSidebar(true)
  }
  return (
    <div className="header">
      <div className="header_left">
        <a href="#">Farming</a>
      </div>

      <div className={showSidebar ? 'header_middle' : 'sidebar'}>
        <a href="#">Home</a>
        <a href="#">Featured</a>
        <a href="#">How it's Work</a>
        <a href="#">Categories</a>
      </div>
      <div className="header_right">
        <a href="#">START FREE TRIAL</a>
      </div>
      <div className="menu_wrapper">
        <button className="buy_now">Buy Now</button>
        <div className="menu_btn" ref={menuRef} onClick={handleOnMenuClick}>
          <AiOutlineMenu />
        </div>
      </div>
      <div className="close_btn" ref={closeRef} onClick={handleOnCloseClick}>
        <AiOutlineClose />
      </div>
    </div>
  )
}

export default Header
