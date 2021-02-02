/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					  // you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															  // or add a specific IPv4 of 192.168.1.5 :
															  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_bar"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				type: 'current',
				units: 'imperial',
				locationID: '5780993',
				apiKey: '54ec2a4770c83c855319b3904ca891e8'
			}
		},
		{
			module: "MMM-Spotify",
			position: "top_left", // "bottom_bar" or "top_bar" for miniBar
			config: {
				debug: false, // debug mode
				style: "default", // "default" or "mini" available (inactive for miniBar)
				moduleWidth: 360, // width of the module in px
				control: "default", // "default" or "hidden"
				showAccountButton: false, // if you want to show the "switch account" control button
				showDeviceButton: true, // if you want to show the "switch device" control button
				useExternalModal: false, // if you want to use MMM-Modal for account and device popup selection instead of the build-in one (which is restricted to the album image size)
				accountDefault: 0, // default account number, attention : 0 is the first account
				updateInterval: 1000, // update interval when playing
				idleInterval: 30000, // update interval on idle
				deviceDisplay: "Listening on", // text to display in the device block (default style only)
				allowDevices: [], //If you want to limit devices to display info, use this. f.e. allowDevices: ["RASPOTIFY", "My Home speaker"],
				volumeSteps: 5, // in percent, the steps you want to increase or decrese volume when reacting on the "SPOTIFY_VOLUME_{UP,DOWN}" notifications
				onStart: {
					deviceName: "Dillon", //if null, current(last) activated device will be.
					spotifyUri: "spotify:playlist:2VYGEyET93LVLjG4FFpjMQ",
					//when search is set, sportifyUri will be ignored.
					// search: {
					// 	type: "playlist", // `artist`, track`, `album`, `playlist` and its combination(`artist,playlist,album`) be available
					// 	keyword: "Discover Weekly",
					// 	random:true,
					// }
				}
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
