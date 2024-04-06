import React from "react";

const EditProfileForm = ({
  member = {},
  onSave,
  onSkillChange,
  onProjectChange,
  addSkill,
  removeSkill,
  addProject,
  removeProject
}) => {
  const { name, mainSkills = [], bestProjects = [] } = member;

  return (
    <form onSubmit={onSave}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => onSkillChange("name", e.target.value)} />
      </label>
      {/* Add other fields (email, phone, about) with similar structure*/}
      <div>
        <h4>Main Skills</h4>
        {mainSkills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => onSkillChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeSkill(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addSkill}>Add Skill</button>
      </div>
      <div>
        <h4>Best Projects</h4>
        {bestProjects.map((project, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => onProjectChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Project Link"
              value={project.link}
              onChange={(e) => onProjectChange(index, "link", e.target.value)}
            />
            <button type="button" onClick={() => removeProject(index)}>Remove Project</button>
          </div>
        ))}
        <button type="button" onClick={addProject}>Add Project</button>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfileForm;
