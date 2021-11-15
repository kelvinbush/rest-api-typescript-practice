import logger from "../../server/src/utils/logger";
import axios from "axios";

const fetcher = async <T>(url: string, headers = {}): Promise<T | null> => {
	logger.info("HEADERS :", headers);
	try {
		const { data } = await axios.get<T>(url, {
			headers,
			withCredentials: true,
		});

		return data;
	} catch (e) {
		return null;
	}
};

export default fetcher;
