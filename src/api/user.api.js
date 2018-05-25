const getUserRole = username => {
    if(username === 'admin') return {role: 'admin'}
    else retrun {role: 'other'}
}

export default getUserRole;