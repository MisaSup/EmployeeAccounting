const AppFilterBtn = ({isActiveBtn, text, active}) =>
{
    const isActive = (bool) => bool ? "btn btn-light" : "btn btn-outline-light";

    return (
        <button className={isActive(active)} type="button"
                onClick={isActiveBtn}>
                    {text}
        </button>
    )
}

export default AppFilterBtn;