import { api_keys } from "./apiKeys";
import { constant } from "./constant";
import { endpoints } from "./endpoints";
import { env } from "./env";
import { routes } from "./routes";

export const CONFIG = {
    ENV: env,
    CONSTANT: constant,
    ROUTES: routes,
    ENDPOINTS: endpoints,
    API_KEYS: api_keys
} 