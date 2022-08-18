import { NavLink } from 'react-router-dom';

const NavigationChampTab = () => {
  return (
    <>
      <div className="flex justify-center tabs pt-4 bg-neutral">
        
        <NavLink to="/champion/name/skins" className={(props) => props.isActive ? 'tab tab-lg tab-lifted tab-active' : 'tab tab-lg tab-lifted'}>
          Skins
        </NavLink>

        <NavLink
          to="/champion/name/abilities"
          className={(props) => props.isActive ? 'tab tab-lg tab-lifted tab-active' : 'tab tab-lg tab-lifted' }>
          Abilities
        </NavLink>

        <NavLink to="/champion/name/combos" className={(props) => props.isActive ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted" }>
          Combos
        </NavLink>
      </div>

    </>
  );
};

export default NavigationChampTab;
