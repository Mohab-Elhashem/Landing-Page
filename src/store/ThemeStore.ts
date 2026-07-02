import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

type Theme = "light" | "dark";

interface ThemeStore {
    theme: Theme;
}

// 1. دالة لقراءة الثيم المخزن في الـ localStorage أو استخدام "light" كوضع افتراضي
const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme === "light" || savedTheme === "dark") {
            // نقوم بإضافة الكلاس لـ html فوراً لتفادي ومضة اللون الأبيض عند تحميل الصفحة
            if (savedTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return savedTheme;
        }
    }
    return "light"; // الافتراضي إذا لم يجد شيئاً مخزناً
};

const initialState: ThemeStore = {
    theme: getInitialTheme() // استخدام الدالة هنا
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            
            // 2. حفظ القيمة الجديدة في الـ localStorage عند التبديل
            localStorage.setItem("theme", state.theme);

            if (state.theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;   