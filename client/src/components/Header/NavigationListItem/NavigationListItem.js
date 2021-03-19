import style from './NavigationListItem.module.css'

const NavigationListItem = (props) => {
    return (
        <li className={style.navListItem}>
            <a href="" className={style.navItem}>{props.children}</a>
        </li>
    );
}

export default NavigationListItem;