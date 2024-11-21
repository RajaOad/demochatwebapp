import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userInfo/Userinfo"

const List = ({ setShowList }) => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList setShowList={setShowList} />
    </div>
  )
}

export default List