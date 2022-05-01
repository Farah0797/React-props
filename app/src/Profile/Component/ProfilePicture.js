import '../../App.css';

function Photo({ profilePicture }) {
    return (
        <div className="Photo">
            <img src={profilePicture} alt="" style={{width:'400px',height:'400px'}}/>
        </div>
    );
}

export default Photo; 