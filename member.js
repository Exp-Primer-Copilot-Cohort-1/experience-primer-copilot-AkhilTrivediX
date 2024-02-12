function skillsMember()
{
    this.skills = ['JavaScript', 'HTML', 'CSS'];
    this.addSkill = function(skill)
    {
        this.skills.push(skill);
    }
}