import crypto from "crypto";

const base64UrlEncode = (input) => Buffer.from(input).toString("base64url");
const base64UrlDecode = (input) => Buffer.from(input, "base64url").toString("utf8");

const getSecret = () => process.env.ADMIN_JWT_SECRET || "change-this-in-production";

export const signToken = (payload, expiresInSeconds = 60 * 60 * 8) => {
  const body = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + expiresInSeconds,
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(body));
  const signature = crypto.createHmac("sha256", getSecret()).update(encodedPayload).digest("base64url");
  return `${encodedPayload}.${signature}`;
};

export const verifyToken = (token) => {
  if (!token || !token.includes(".")) {
    throw new Error("Invalid token format.");
  }

  const [encodedPayload, signature] = token.split(".");
  const expectedSignature = crypto.createHmac("sha256", getSecret()).update(encodedPayload).digest("base64url");

  if (signature !== expectedSignature) {
    throw new Error("Invalid token signature.");
  }

  const payload = JSON.parse(base64UrlDecode(encodedPayload));
  if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) {
    throw new Error("Token expired.");
  }

  return payload;
};
