const helpers = {
	capitalize(str) {
		str = str.charAt(0).toUpperCase() + str.slice(1);

		return str;
	},
};

export default helpers;
