let htmlSkillLevel = Number(prompt('Zadejte svuj level dovednosti v HTML od 0 - 100:'));
let cssSkillLevel = Number(prompt('Zadejte svuj level dovednosti v CSS od 0 - 100:'));
let javaScriptSkillLevel = Number(prompt('Zadejte svuj level dovednosti v JavaScript od 0 - 100:'));

function updateSkill(skillId = String, level = Number){
  const skillBar = document.getElementById(skillId).querySelector('.skill__progress');
  const skillValue = document.getElementById(skillId).querySelector('.skill__value');

  skillBar.style.width = level + '%';
  skillValue.textContent = level + '/100';
}

updateSkill("skill1", htmlSkillLevel);
updateSkill("skill2", cssSkillLevel);
updateSkill("skill3", javaScriptSkillLevel);
