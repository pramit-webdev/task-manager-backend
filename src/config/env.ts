import "dotenv/config";

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const env = {
  PORT: Number(process.env.PORT || 4000),
  DATABASE_URL: requireEnv("DATABASE_URL"),
  DIRECT_URL: requireEnv("DIRECT_URL"),
};
