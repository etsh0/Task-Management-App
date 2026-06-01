const config = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  anonKey: import.meta.env.VITE_ANON_KEY as string,
} as const;

export default config;
