import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import styles from './searchPanel.module.scss';
import searchImg from '../../assets/search.png'
import { getSearch10Items, setSerarchItems } from '../../store/gitReducer/gitReducer';

const SerachPanel = ({searchItems, getSearch10Items, setSerarchItems}) => {
    const [search, setSearch] = useState('');
    const [timer, setTimer] = useState(null);
    

    
    useEffect(() => { 
        //borra settimeout mientras el usuario escribe una palabra 
        if(timer){
            clearTimeout(timer);
        }

        //cuando el usuario ya no escribe, se realiza una solicitud al servidor
        if(search){
            setTimer(
                setTimeout(() => {
                    getSearch10Items(search);
                }, 1000)
            )
        }else{
            setSerarchItems([])
        }

        return () => {
            clearInterval(timer);
        }
    }, [search])


    return(
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="search" id="searchInput"/>
                <img src={searchImg} alt="" />
            </div>
            {searchItems.length  > 0  &&
                <div className={styles.itemContainer}>
                    <div className={`${styles.item} ${styles.leftItem}`}>Nombre Repositorio</div>
                    <div className={`${styles.item} ${styles.rightItem}`}>URL</div>
                </div>
            }
            {searchItems.length > 0 &&
                searchItems.map(item => {
                    return(
                        <div key={item.id} className={styles.itemContainer}>
                            <div className={`${styles.item} ${styles.leftItem}`}>{item.name}</div>
                            <div className={`${styles.item} ${styles.rightItem}`}><a href={item.html_url}>{item.html_url}</a></div>
                        </div>
                    )
            })}
        </div>
    )
}

let mapStateToProps = (state) => {
    return({
        searchItems: state.git.searchItems
    })
}



export default connect(mapStateToProps, {getSearch10Items, setSerarchItems})(SerachPanel);