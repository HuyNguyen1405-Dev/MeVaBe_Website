import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMobileMenuOpen: boolean;
  isSearchModalOpen: boolean;
  isCartModalOpen: boolean;
  isLoading: boolean;
  notifications: Notification[];
  theme: "light" | "dark";
  language: "vi" | "en";
}

interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  timestamp: number;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  isSearchModalOpen: false,
  isCartModalOpen: false,
  isLoading: false,
  notifications: [],
  theme: "light",
  language: "vi",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },

    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },

    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },

    toggleSearchModal: (state) => {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },

    openSearchModal: (state) => {
      state.isSearchModalOpen = true;
    },

    closeSearchModal: (state) => {
      state.isSearchModalOpen = false;
    },

    toggleCartModal: (state) => {
      state.isCartModalOpen = !state.isCartModalOpen;
    },

    openCartModal: (state) => {
      state.isCartModalOpen = true;
    },

    closeCartModal: (state) => {
      state.isCartModalOpen = false;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    addNotification: (
      state,
      action: PayloadAction<Omit<Notification, "id" | "timestamp">>
    ) => {
      const notification: Notification = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        duration: 5000,
        ...action.payload,
      };
      state.notifications.push(notification);
    },

    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },

    clearNotifications: (state) => {
      state.notifications = [];
    },

    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },

    setLanguage: (state, action: PayloadAction<"vi" | "en">) => {
      state.language = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  openMobileMenu,
  toggleSearchModal,
  openSearchModal,
  closeSearchModal,
  toggleCartModal,
  openCartModal,
  closeCartModal,
  setLoading,
  addNotification,
  removeNotification,
  clearNotifications,
  setTheme,
  setLanguage,
} = uiSlice.actions;

export default uiSlice.reducer;
