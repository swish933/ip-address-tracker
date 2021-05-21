import Search from './Search';
import Info from './Info';
import { dash } from '../css/Dash.module.css';

const Dash = () => {
	return (
		<div className={dash}>
			<Search />
			<Info />
		</div>
	);
};
export default Dash;
