function authenticate(username, password){
    console.log('we are authenticating the user ' ) ;
    if (username == 'user1' && password == '123')
        return true ; 
    if (username =='user2' && password == '')
        return true; 
    return false ; 
}