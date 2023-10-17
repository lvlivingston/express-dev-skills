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
    getOne
};
	
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}  

function getAll() {
    return skills;
}