import { AiOutlineClose } from "react-icons/ai";

const CreateGroupModel = ({ show, handleClose, groupName, setGroupName, handleCreate}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <AiOutlineClose onSubmit={handleClose} />
            <form onSubmit={handleCreate}> 
                Group Name: <input value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}


export default CreateGroupModel;