import './Menu.css';

function Menu({ header, items, active, setActive }) {


console.log(items.icon)

    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className='blur' />
                <div className='menu__content' onClick={e => e.stopPropagation()}>
            <div className='menu__header'> {header} </div>
            <ul>
                {items.map((item, index) => 
                    <li key={index}>
                        <a href={item.href}> {item.value} </a>
                        <span className="material-icons">
                            {item.icon}
                        </span>

                    </li>)}
                </ul>
            </div>
        </div>
    );
}

export default Menu;