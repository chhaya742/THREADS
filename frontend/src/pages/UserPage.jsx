import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'
const UserPage = () => {
  return (
   <>
    <UserHeader/>
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="let's talk about threads"/>
    <UserPost likes={1100} replies={381} postImg="/post2.png" postTitle="Nice tutorial"/>
    <UserPost likes={4200} replies={401} postImg="/post3.png" postTitle="I love this guy"/>
    <UserPost likes={500} replies={41}  postTitle="This is my first post"/>
   </>
  )
}

export default UserPage