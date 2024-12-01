import BuilderLayout from "@/home/BuilderLayout";
import { useActivity } from "@/stores/activity"; // Adjust the import path as needed
import { useAwards } from "@/stores/awards"; // Import the useAwards store
import { useBasicDetails } from "@/stores/basic"; // Import the useBasicDetails store
import { useEducations } from "@/stores/education"; // Import the useEducations store
import { useExperiences } from "@/stores/experience"; // Import the useExperiences store
import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from "@/stores/skills"; // Import the useSkills stores
import { useVoluteeringStore } from "@/stores/volunteering"; // Import the useVolunteeringStore store
import axios from "axios";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [resumeData, setResumeData] = useState(null);
  const { reset: resetActivity } = useActivity();
  const { reset: resetAwards } = useAwards(); // Get the reset function from useAwards
  const { reset: resetBasicDetails } = useBasicDetails(); // Get the reset function from useBasicDetails
  const { reset: resetExperiences } = useExperiences(); // Get the reset function from useExperiences
  const { reset: resetEducations } = useEducations(); // Get the reset function from useEducations
  const { reset: resetVolunteering } = useVoluteeringStore(); // Get the reset function from useVolunteeringStore
  const { reset: resetLanguages } = useLanguages(); // Get the reset function from useLanguages
  const { reset: resetFrameworks } = useFrameworks(); // Get the reset function from useFrameworks
  const { reset: resetTechnologies } = useTechnologies(); // Get the reset function from useTechnologies
  const { reset: resetLibraries } = useLibraries(); // Get the reset function from useLibraries
  const { reset: resetDatabases } = useDatabases(); // Get the reset function from useDatabases
  const { reset: resetPractices } = usePractices(); // Get the reset function from usePractices
  const { reset: resetTools } = useTools(); // Get the reset function from useTools

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/getResumeData");
        console.log(response.data);
        setResumeData(response.data);
        resetActivity(response.data.activity); // Update the activity store with the fetched data
        resetAwards(response.data.awards); // Update the awards store with the fetched awards data
        resetBasicDetails(response.data.basics); // Update the basic details store with the fetched basic details data
        resetExperiences(response.data.work); // Update the experiences store with the fetched work data
        resetEducations(response.data.education); // Update the educations store with the fetched education data
        resetVolunteering(response.data.volunteer); // Update the volunteering store with the fetched volunteering data
        resetLanguages(response.data.skills.languages); // Update the languages store with the fetched languages data
        resetFrameworks(response.data.skills.frameworks); // Update the frameworks store with the fetched frameworks data
        resetTechnologies(response.data.skills.technologies); // Update the technologies store with the fetched technologies data
        resetLibraries(response.data.skills.libraries); // Update the libraries store with the fetched libraries data
        resetDatabases(response.data.skills.databases); // Update the databases store with the fetched databases data
        resetPractices(response.data.skills.practices); // Update the practices store with the fetched practices data
        resetTools(response.data.skills.tools); // Update the tools store with the fetched tools data
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };
    getData();
  }, [
    resetActivity,
    resetAwards,
    resetBasicDetails,
    resetExperiences,
    resetEducations,
    resetVolunteering,
    resetLanguages,
    resetFrameworks,
    resetTechnologies,
    resetLibraries,
    resetDatabases,
    resetPractices,
    resetTools,
  ]);

  return (
    <div>
      <BuilderLayout />
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/get-resume-data");
  return {
    props: {
      initialResumeData: response.data,
    },
  };
}

export default IndexPage;
