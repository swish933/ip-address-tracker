import Search from './Search';
import Info from './Info';

const Dash = ({ input, Submit }) => {
	return (
		<div>
			<Search Submit={Submit} />
			<Info />
		</div>
	);
};
export default Dash;
