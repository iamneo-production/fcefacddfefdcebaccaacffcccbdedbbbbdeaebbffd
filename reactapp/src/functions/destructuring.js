function getUserIpDetails(userResponse = {}) 
{
    const {userName, userIp = '0.0.0.0' } = userResponse;
    return [userName, userIp];
}
function getTopThree(studentMarks = []) 
{
    const [firstMark = null, secondMark = null, thirdMark = null, ...rest] = studentMarks;
    return [firstMark, secondMark, thirdMark].sort();
}
export { getUserIpDetails, getTopThree};