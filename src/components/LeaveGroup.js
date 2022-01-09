import { AiOutlineClose } from "react-icons/ai";

const LeaveGroup = ({ show, handleClose, groups, leaveGroup }) => {
    const showHideClassName = show ?  "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section  className="modal-main">
            <AiOutlineClose className="close-btn" onClick={handleClose}/>
                {groups.map((group) => {
                    return (
                        <li key={group.groupId}>
                            <button onClick={() => leaveGroup(group.groupId)}>{group.name}</button>
                        </li>
                    )
                })}
            </section>
        </div>
    )
}

export default LeaveGroup