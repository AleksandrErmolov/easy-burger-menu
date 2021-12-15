import './Menu.css';

function Menu({header, items  }) {


console.log(items.icon)

    return (
        <div className='menu'>
            <div className='blur' />
                <div className='menu__content'></div>
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
    );
}

export default Menu;