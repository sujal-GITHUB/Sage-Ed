const ExperienceCard = ({ role, company, period }) => (
    <div className="flex gap-4 p-4 bg-white border-2 border-black">
      <div className="w-10 h-10 bg-gray-200 border-2 border-black flex items-center justify-center">💼</div>
      <div>
        <h3 className="font-bold">{role}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm text-gray-600">{period}</p>
      </div>
    </div>
  )
  
  const WorkExperience = ({ experiences }) => {
    return (
      <div className="space-y-4">
        <h2 className="font-mono text-xl font-bold">Work experience</h2>
        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    )
  }
  
  export default WorkExperience
  
  