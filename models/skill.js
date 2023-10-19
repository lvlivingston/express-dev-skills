const skills = [
    {id: 12345, skill: 'HTML', done: true},
    {id: 67890, skill: 'CSS', done: true},
    {id: 23456, skill: 'JavaScript', done: true},
    {id: 78901, skill: 'Canvas', done: true},
    {id: 34567, skill: 'Python', done: false},
    {id: 89012, skill: 'React', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}  

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}
	
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}  

function getAll() {
    return skills;
}