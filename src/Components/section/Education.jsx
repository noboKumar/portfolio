import { FaGraduationCap } from "react-icons/fa6";
import Container from "../UI/Container";

const educationData = [
  {
    institute: "National University",
    degree: "BBA (Accounting)",
    years: "2023 - Current",
  },
  {
    institute: "Satkhira Govt. College",
    degree: "Higher School Certificate (HSC)",
    years: "2019 - 2021",
  },
];

export default function Education() {
  return (
    <Container className="mx-auto pt-4 px-2 md:px-6">
      {/* Heading */}
      <h2 className="text-lg md:text-xl font-semibold mb-1 tracking-tight flex items-center gap-2">
        <span>Education</span>
        <span className="flex-1 border-t border-base-content/60 ml-2" />
      </h2>
      <ul className="space-y-6 mt-4">
        {educationData.map((item, idx) => (
          <li key={idx} className="flex gap-3 items-start">
            <span className="text-lg mt-1 text-base-content/80 shrink-0">
              <FaGraduationCap />
            </span>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="font-semibold text-base md:text-lg">
                    {item.institute}
                  </span>
                  <div className="text-sm text-base-content/80">
                    {item.degree}
                  </div>
                </div>
                <span className="text-xs md:text-sm text-base-content/60 mt-1 md:mt-0 md:ml-6 whitespace-nowrap">
                  {item.years}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}