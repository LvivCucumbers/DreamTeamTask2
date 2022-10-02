import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import styles from './SharedLayout.module.css';
export function SharedLayout() {

    const StyledLink = styled(NavLink)`
    color: black;
    &.active {
      color: #3816E7;
      background-color: black;
      padding:10px;
      
    }
  `;

    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <StyledLink to="/" end>
                                People
                            </StyledLink>
                        </li>
                        <li className={styles.item}>
                            <StyledLink to="/planets" className={styles.itemText}>Planets</StyledLink>
                        </li>
                        <li className={styles.item}>
                            <StyledLink to="/starships" className={styles.itemText}>Starships</StyledLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
            #here footer
        </>
    );
}
