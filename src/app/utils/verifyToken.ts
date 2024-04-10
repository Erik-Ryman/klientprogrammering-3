import jwt from "jsonwebtoken";

export default function verifyToken(token: any) {
	try {
		const decodedToken = jwt.verify(token, "your_secret_key");
		return decodedToken;
	} catch (error) {
		console.error("Token verification failed:", error);
		return null;
	}
}
