/**
 * Application Route Paths
 * Centralized path constants to avoid hardcoded strings
 */

export const PATHS = {
  // Main pages
  HOME: "/",
  TODO: "/todo",
  TAROT: "/tarot",
  LOGIN: "/login",

  // Todo sub-routes
  TODO_CREATE: "/todo-create",
  TODO_EDIT: "/todo-edit/:id",
  TODO_DETAIL: "/todo/:id",
} as const;

/**
 * Menu Labels
 * Centralized label constants for menu items
 */
export const LABELS = {
  HOME: "Home",
  TODO: "Todo List",
  TAROT: "Tarot AR",
  LOGIN: "Login",
  LOGOUT: "Logout",
} as const;

/**
 * Menu Items Configuration
 * Combines paths and labels for menu rendering
 */
export const MENU_ITEMS = [
  {
    key: PATHS.HOME,
    label: LABELS.HOME,
    path: PATHS.HOME,
    requiresAuth: false,
  },
  {
    key: PATHS.TODO,
    label: LABELS.TODO,
    path: PATHS.TODO,
    requiresAuth: true,
  },
  {
    key: PATHS.TAROT,
    label: LABELS.TAROT,
    path: PATHS.TAROT,
    requiresAuth: true,
  },
];

// Type for path keys
export type PathKey = keyof typeof PATHS;
export type LabelKey = keyof typeof LABELS;
