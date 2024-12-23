import ActivitiesLayout from "@/home/editor/modules/activities/ActivitiesLayout";
import AwardsLayout from "@/home/editor/modules/awards/AwardsLayout";
import BasicLayout from "@/home/editor/modules/basic/BasicLayout";
import EducationLayout from "@/home/editor/modules/education/EducationLayout";
import ExperienceLayout from "@/home/editor/modules/experience/ExperienceLayout";
import SkillsLayout from "@/home/editor/modules/skills/SkillsLayout";
import VolunteeringLayout from "@/home/editor/modules/volunteering/VolunteeringLayout";

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  "basic-details": { title: "Basic details", component: BasicLayout },
  "skills-and-expertise": {
    title: "Skills and expertise",
    component: SkillsLayout,
  },
  education: { title: "Education", component: EducationLayout },
  experience: { title: "Experience", component: ExperienceLayout },
  activities: { title: "Activities", component: ActivitiesLayout },
  volunteering: { title: "Volunteering", component: VolunteeringLayout },
  awards: { title: "Awards", component: AwardsLayout },
};
