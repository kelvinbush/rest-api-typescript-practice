import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	//your config
	apiKey: "AIzaSyDuxj95UzMmguTh596kCn0_pcl9ifWtkgo",
	authDomain: "fir-4a8b1.firebaseapp.com",
	projectId: "fir-4a8b1",
	storageBucket: "fir-4a8b1.appspot.com",
	messagingSenderId: "906957533847",
	appId: "1:906957533847:web:cf87b3d3de563dedb5afd2",
};

export const app () => initializeApp(firebaseConfig);
