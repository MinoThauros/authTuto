export class FireBaseSecrets{
    SignupUrl='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    primitiveLink='https://identitytoolkit.googleapis.com/v1/accounts:'
    API_KEY='AIzaSyDWZcx9JHwZSj2fam2grs4bAL0reJBuIzE'
    SignInUrl='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='

    //implement this later    
    URL=(mode)=>{
        let modeTranslator;
        switch(mode){
            case 'login':
                modeTranslator='signUp'
                break
            case 'signup':
                modeTranslator='signInWithPassword'
                break
        }
        return this.primitiveLink.concat(modeTranslator,'?key=',this.API_KEY)
    }

    //readonly SignInUrl:s
    

}