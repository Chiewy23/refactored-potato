import "./search-box.css";

const SearchBox = ({onChangeHandler, placeholderText, styleName}) => {    
    return (
        <input className={styleName}
                type='search'
                placeholder={placeholderText}
                onChange={onChangeHandler}/>
    )
}

export default SearchBox;