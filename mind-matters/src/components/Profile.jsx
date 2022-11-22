const Profile = ({helper}) => {
    return (
        <div>
            <ul key = {helper.id}>
                <li>{helper.nick_name}</li>
                <li>{helper.gender}</li>
                <li>{helper.age}</li>
                <li>{helper.price}</li>
                <li>{helper.address}</li>
                <li>{helper.bio}</li>
            </ul>
        </div>
    )
}

export default Profile;