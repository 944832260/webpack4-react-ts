const proxy = [
	{ path: ['/customer',], target: 'https://policy.apluslabs.com' }
];

module.exports = {
	ip: "0.0.0.0",
	port: 3008,
	proxy
};
