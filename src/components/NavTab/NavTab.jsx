import React from "react";
import NavButton from "../NavButton/NavButton";

const NavTab = () => {
    return (
        <nav className="navtab">
            <NavButton name={'Тренировка'} />
            <NavButton name={'Обо мне'} />
            <NavButton name={'Нутрициология'} />
            <NavButton name={'Отзывы'} />
        </nav>
    )
}

export default NavTab;
