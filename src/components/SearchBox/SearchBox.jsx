import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '@redux/filters/slice';
import { selectSearchFilter } from '@redux/filters/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearchFilter);

  return (
    <>
      <label className={css.search}>
        Find contacts by name or number
        <input
          type="text"
          value={value}
          placeholder="name or number"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default SearchBox;
