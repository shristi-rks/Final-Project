const Form = () => {
    return (
        <div>
            <form>
                First Name:
                <input type="text" name="fname" />
                Last Name:
                <input type="text" name="lname"/>
                <br/>
                Age:
                <input type="number" name="age" maxLength="2" />
                <br/>
                Address:
                <br/>
                Description:
                <br/>
                <textarea rows="10" cols="30" name="comment"></textarea>
                <br/>

            </form>
        </div>
    )
}
export default Form ;