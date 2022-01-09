import { AiOutlineClose } from "react-icons/ai";

const JoinGroup = ({ show, handleClose, allGroups, userGroups, handleJoin }) => {
    const showHideClassName = show ?  "modal display-block" : "modal display-none";

    const temp = allGroups.filter((group) => !userGroups.find(({ groupId }) => group.groupId === groupId))
    return (
        <div className={showHideClassName}>
            <section  className="modal-main">
            <AiOutlineClose className="close-btn" onClick={handleClose}/>
                {temp.map((group) => {
                    return (
                    <li key={group.id}>
                        <button onClick={() => handleJoin(group.groupId)}>{group.name}</button>
                    </li>
                    )
                })}
            </section>
        </div>
    )
}

export default JoinGroup