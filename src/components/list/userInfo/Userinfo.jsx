import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import { auth } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const Userinfo = () => {

  const { currentUser } = useUserStore();
  const { resetChat } = useChatStore();

  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };

  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>

      <div>
      <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div> */}
    </div>
  )
}

export default Userinfo