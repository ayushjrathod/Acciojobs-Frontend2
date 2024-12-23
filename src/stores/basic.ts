import resumeData from "@/helpers/constants/resume-data.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IBasicDetailsItem, IBasicDetailsStore } from "./basic.interface";
import { SetState } from "./store.interface";

const onChangeText = (set: SetState<IBasicDetailsStore>) => (values: IBasicDetailsItem) => set({ values });

export const useBasicDetails = create<IBasicDetailsStore>()(
  persist(
    (set) => ({
      values: resumeData.basics,
      reset: onChangeText(set),
    }),
    { name: "basic" }
  )
);
