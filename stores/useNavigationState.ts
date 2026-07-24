import React from "react";
import { create } from "zustand";

interface NavigationState {
	activeSection: string;
	setActiveSection: (section: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
	activeSection: "", // Initial state
	setActiveSection: (section) => set({ activeSection: section }),
}));
