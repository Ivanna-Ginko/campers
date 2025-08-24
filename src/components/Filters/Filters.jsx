import css from './Filters.module.css';
import FilterButton from '../FilterButton/FilterButton';
import kitchen from '../../assets/icons/cup-hot.svg';
import tv from '../../assets/icons/tv.svg';
import bath from '../../assets/icons/Bathroom.svg';
import AC from '../../assets/icons/AC.svg';
import automatic from '../../assets/icons/automatic.svg';
import alcoveIcon from '../../assets/icons/Alcove.svg';
import fullyIntegratedIcon from '../../assets/icons/F-I.svg';
import vanIcon from '../../assets/icons/van.svg';
import { useSelector, useDispatch } from "react-redux";
import { setLocation, setForm, toggleTransmission, toggleFeature } from "../../Redux/filterSlice"
import { fetchCampers } from '../../Redux/operations'
import Button from '../Button/Button'

const Filters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();


 

  const iconVehicleTypes = {
    van: vanIcon,
    "fully Integrated": fullyIntegratedIcon,
    alcove: alcoveIcon,
  };
  const vehicleTypes = ["van", "fully Integrated", "alcove"];

  return (
    <div>
      <p className={css.namefield}>Location</p>

      <input
        className={css.location}
        type="text"
        placeholder="Kyiv, Ukraine"
        value={filters.location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
      />

      <p className={css.namefield}>Filters</p>
      <p className={css.classtype}>Vehicle equipment</p>

      <div className={css.features}>
        <FilterButton
          active={filters.features.AC}
          onClick={() => dispatch(toggleFeature("AC"))}
          icon={AC}
          label="AC"
        />

        <FilterButton
          active={filters.transmission === "automatic"}
          onClick={() => dispatch(toggleTransmission())}
          icon={automatic}
          label="Automatic"
        />

        <FilterButton
          active={filters.features.kitchen}
          onClick={() => dispatch(toggleFeature("kitchen"))}
          icon={kitchen}
          label="Kitchen"
        />

        <FilterButton
          active={filters.features.TV}
          onClick={() => dispatch(toggleFeature("TV"))}
          icon={tv}
          label="TV"
        />

        <FilterButton
          active={filters.features.bathroom}
          onClick={() => dispatch(toggleFeature("bathroom"))}
          icon={bath}
          label="Bathroom"
        />
      </div>

      <div className={css.box}>
        <p className={css.classtype}>Vehicle type</p>
        <div className={css.features}>
          {vehicleTypes.map((type) => (
            <FilterButton
              key={type}
              active={filters.form === type}
              onClick={() => dispatch(setForm(type))}
              icon={iconVehicleTypes[type]}
              label={type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
            />
          ))}
        </div>
      </div>
        <Button
    className={css.submitBtn}
    onClick={() => dispatch(fetchCampers(filters))}
  >
    Search
  </Button>
    </div>
  );
};

export default Filters;