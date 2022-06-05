function TabTodo({ text, keyUsing, changeAfterClick }) {

    return (
        <div class="column is-half">
            <p class="bd-notification is-primary" style={{ color: "#2366d1" }} onClick={() => {
                console.log("keyUsing", keyUsing);
                changeAfterClick(keyUsing)
            }} >{text}
            </p>
        </div>
    )
}
export default TabTodo;