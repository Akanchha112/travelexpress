// import CompanyLogo from './images/logo.svg'; // Add your logo here
// import UserProfilePic from './images/profile.png'; // Add your profile pic here
import "./index.css";
const Create = () => {
    const myStyl = {
        backgroundImage: `url(${'/images/bg.jpg'})`

    };
    return <>
        <div className="create" style={myStyl}>
            <div className="contentwrapper">
                <div className="create-content">
                    <div className="logoparent">
                        <img src={'/images/logo.svg'} alt="Company Logo" className="logo" />
                        <h1 className="travel-heading">Travel Express</h1>
                    </div>

                    <img src={'/images/profile.png'} alt="User Profile" className="profile-pic" />
                </div>
                <div className="itinbtn_container">

                    <button><img src="/images/road.png" className="road" />Create a Trip ititnerary</button>
                </div>
            </div>
        </div>
    </>
}
export default Create;